const path = require(`path`)
const fetch = require(`node-fetch`)

const page = (createPage, url, template, data = null) => {
  createPage({
    path: url,
    component: path.resolve(template),
    context: { url, data },
  })
}

const pages = (createPage, nodes, url, template) => {
  nodes.forEach((item, i) => {
    createPage({
      path: `${url}/${item.slug}`,
      component: path.resolve(template),
      context: {
        url,
        node: item,
        pagination: {
          current: i + 1,
          total: nodes.length,
          prev: i === 0 ? null : `${url}/${nodes[i - 1].slug}`,
          next: i === nodes.length - 1 ? null : `${url}/${nodes[i + 1].slug}`,
        },
      },
    })
  })
}

const pagination = (createPage, ppp, nodes, url, template) => {
  const totalNodes = Math.ceil(nodes.length / ppp)
  for (let i = 0; i < totalNodes; i++) {
    const skip = i * ppp
    const limit = skip + ppp
    const nodesPerPage = nodes.slice(skip, limit)
    createPage({
      path: i === 0 ? url : `${url}/${i + 1}`,
      component: path.resolve(template),
      context: {
        url,
        nodes: nodesPerPage,
        pagination: {
          current: i + 1,
          total: totalNodes,
          prev: i === 0 ? null : i === 1 ? url : `${url}/${i}`,
          next: i === totalNodes - 1 ? null : `${url}/${i + 2}`,
        },
      },
    })
  }
}

const articleQuery = `
  query ArticleQuery {
    allContentfulArticulo(sort: { fields: fecha, order: DESC }) {
      nodes {
        titulo
        fecha
        texto {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 140)
          }
        }
        slug
      }
    }
  }
`

const aboutQuery = `
  query AboutQuery {
    contentfulAbout {
      video {
        file {
          url
        }
      }
      texto {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

const appEndpoint = `https://raw.githubusercontent.com/aniversarioperu/efemerides-bot/master/efemerides_bot/data.json`

const arrQuerys = [articleQuery, aboutQuery]
const arrEndpoints = [appEndpoint]

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const arrResultQuerys = arrQuerys.map(query => graphql(query))
  const arrResultEndpoints = arrEndpoints.map(endpoint =>
    fetch(endpoint).then(response => response.json())
  )
  const dataPromises = [...arrResultQuerys, ...arrResultEndpoints]
  const data = await Promise.all(dataPromises)

  const articles = data[0].data.allContentfulArticulo.nodes
  const about = data[1].data.contentfulAbout
  const appdata = data[2]

  page(createPage, `/`, `./src/templates/home/Home.js`, {
    video: about.video,
    lastArticle: articles[0],
  })
  page(createPage, `/about`, `./src/templates/about/About.js`, { about })
  pages(createPage, articles, `/blog`, `./src/templates/blog/BlogPost.js`)
  pagination(createPage, 6, articles, `/blog`, `./src/templates/blog/Blog.js`)
  page(createPage, `/app`, `./src/templates/app/App.js`, { appdata })
  page(createPage, `/404`, `./src/templates/404/404.js`)
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type ContentfulExhibicion implements Node {
//       subtitulo: String
//     }
//   `
//   createTypes(typeDefs)
// }
