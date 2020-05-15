// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
/* ⬆NPM ⬇CUSTOM */
import SectionTitle from './SectionTitle'
import Card from './Card'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Favorites = (props) => {
  let section = {
    title: "Favorites",
    subTitle: "LACOMSでよく使われているサイトたち",
    favicon: "fas fa-star color-orange",
    enableAdd: true,
    addButtonTargetId: "#addWebsiteModal",
    removeButtonTargetId: "#removeSiteModal"
  }

  let Cards = props.favoriteSites.map(site => (
    <div className="col test-restrict-width" key={JSON.stringify(site)}>
      <Card site={site} />
    </div>
  ))

  let favorites = (
    <div className="container Favorites">
      <div className="test-sectionTitle">
        <SectionTitle section={section} />
      </div>

      <div className="row px-4">
        {Cards}
      </div>
    </div >
  )

  return favorites
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(Favorites)
// ────────────────────────────────────────────────────────────────────────┘
