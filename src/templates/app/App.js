import React from "react"
import Layout from "../../components/layout/Layout"

export default ({ pageContext: { url, data } }) => {
  return (
    <Layout type="HM" className="app" slug={url} title="APP">
      <h1>APP</h1>
      <p>Leer API's externas de datos y volver estático el contenido: </p>
      <table>
        <thead>
          <tr>
            <th>fecha</th>
            <th>hecho</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody>
          {data.appdata.efemerides.map((item, i) => (
            <tr key={i}>
              <td>{item.fecha}</td>
              <td>{item.hecho}</td>
              <td>
                <a href={item.link}>{item.link}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
