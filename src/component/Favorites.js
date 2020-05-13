// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
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
    enableAdd: true
  }

  let myFavorites = [{
    title: "Google カレンダー",
    url: "https://calendar.google.com/calendar/r",
    createdBy: "管理者",
    imgKey: "googleCalendar"
  }, {
    title: "2020生徒講師管理Suite",
    url: "https://docs.google.com/spreadsheets/d/1UEOt3BQ-Uy96RD2P7bNfFcq3XC6DiukRhnbwyYpJSQg/",
    createdBy: "管理者",
    imgKey: "kanriAdmin"
  }, {
    title: "授業変更フォーム",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdQVM0ygr6WW6NKungHOuynxEXhWZ4S14HJx8xmUpLhHaMqvw/viewform",
    createdBy: "管理者",
    imgKey: "henkoForm"
  }, {
    title: "LINE WORKS",
    url: "https://auth.worksmobile.com/login/login?accessUrl=https://talk.worksmobile.com/#/",
    createdBy: "管理者",
    imgKey: "lineWorks"
  }]

  let Cards = myFavorites.map(site => (
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
export default Favorites
// ────────────────────────────────────────────────────────────────────────┘
