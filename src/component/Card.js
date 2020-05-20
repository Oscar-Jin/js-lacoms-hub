// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { Link } from 'react-router-dom'

import img from '../img/img'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Card = (props) => {
  let { type = "SITE_PREVIEW", site } = props

  let sitePreview = (
    <div className="lacoms-sitepreview-card">
      <div className="preview">
        {
          site.imgKey ?
            <img src={img[site.imgKey]} alt={site.title} /> :
            <div className="site-title p-2" >
              <div className="child-flex-item">
                <h1 style={{ color: site.color || "black" }}>{site.title}</h1>
              </div>
            </div>
        }
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <a className="btn btn-outline-light btn-block stretched-link" href={site.url}>{site.title}</a>
      </div>
    </div>
  )

  let link = (
    <div className="lacoms-sitepreview-card">
      <div className="preview">
        {
          site.imgKey ?
            <img src={img[site.imgKey]} alt={site.title} /> :
            <div className="site-title p-2" >
              <div className="child-flex-item">
                <h1 style={{ color: site.color || "black" }}>{site.title}</h1>
              </div>
            </div>
        }
      </div>
      <div className="d-flex justify-content-between align-items-center">

        <Link to={site.url} className="btn btn-outline-light btn-block stretched-link">
          {site.title}
        </Link>


      </div>
    </div>
  )

  switch (type) {
    case "SITE_PREVIEW":
      return sitePreview
    case "LINK":
      return link
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

