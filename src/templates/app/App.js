import React from "react"
import Layout from "../../components/layout/Layout"
// import "./App.css"

export default ({ pageContext }) => {
  const appdata = pageContext.appdata.data

  return (
    <Layout type="HM" className="app" slug="/app" title="APP">
      <div>
        <h1>APP</h1>
        <p>Leer API's externas de datos y volver estático el contenido: </p>
        <table>
          <thead>
            <tr>
              <th>región</th>
              <th>casos confirmados</th>
              <th>fallecidos</th>
              <th>fatalidad</th>
            </tr>
          </thead>
          <tbody>
            {appdata.map((item, i) => (
              <tr key={i}>
                <td>{item.region.province}</td>
                <td>{item.confirmed}</td>
                <td>{item.deaths}</td>
                <td>{item.fatality_rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
