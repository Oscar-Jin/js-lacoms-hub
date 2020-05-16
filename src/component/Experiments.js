// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
/* ⬆NPM ⬇CUSTOM */
import SectionTitle from './SectionTitle'
import Card from './Card'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Experiments = (props) => {
  let section = {
    title: "Experiments",
    subTitle: "金ちゃんが開発しているアプリや、思いつきで作った機能とか。主に技術検証用で「こういうのがあったらいいよねー」みたいなサンプルのようなもの。",
    favicon: "fas fa-flask color-red",
    enableAdd: false,
  }

  let Cards = props.experimentSites.map(site => (
    <div className="col test-restrict-width" key={JSON.stringify(site)}>
      <Card site={site} type={"LINK"}/>
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
export default connect(state => state)(Experiments)
// ────────────────────────────────────────────────────────────────────────┘
