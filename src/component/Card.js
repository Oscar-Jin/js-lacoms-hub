// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import img from '../../public/img/img'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Card = (props) => {
  let { type = "SITE_PREVIEW", site } = props

  switch (type) {
    case "SITE_PREVIEW":
      return (
        <div className="lacoms-sitepreview-card">
          <div className="preview">
            <img src={img[site.imgKey]} alt={site.title} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <a className="btn btn-outline-light btn-block stretched-link" href={site.url}>{site.title}</a>
          </div>
        </div>
      )
    default:
      return (
        <h1>ERROR: Undefined Card Ttpe </h1>
      )
  }
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default Card
// ────────────────────────────────────────────────────────────────────────┘