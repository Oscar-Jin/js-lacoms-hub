// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
/* ⬆NPM ⬇CUSTOM */
import SectionTitle from './SectionTitle'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Apps = (props) => {
  let section = {
    title: "Apps",
    subTitle: "作業に便利なアプリケーションたち",
    favicon: "fab fa-app-store-ios color-dodgerblue",
    enableAdd: true
  }

  let savedApps = [{
    title: "Gmail",
    url: "https://mail.google.com/mail/",
    favicon: "fas fa-envelope", // <-- refactor ??
    buttonColor: "btn-danger"
  }, {
    title: "Dropbox",
    url: "https://www.dropbox.com/h",
    favicon: "fab fa-dropbox",
    buttonColor: "btn-primary"
  }, {
    title: "Google Sheets",
    url: "https://docs.google.com/spreadsheets/u/0/",
    favicon: "fas fa-table",
    buttonColor: "btn-success"
  }, {
    title: "Google",
    url: "https://www.google.co.jp/",
    favicon: "fab fa-google",
    buttonColor: "btn-info"
  }, {
    title: "Google Form",
    url: "https://docs.google.com/forms/",
    favicon: "fas fa-file-alt",
    buttonColor: "btn-dark"
  }]

  let Apps = savedApps.map(app => (
    <div key={JSON.stringify(app)} className="col-auto my-3">
      <a className={"app-button " + app.buttonColor} href={app.url}>
        <i className={"fa-3x w-100 p-1 " + app.favicon} /><br />
        <span>{app.title}</span>
      </a>
    </div>

  ))

  let apps = (
    <div className="container Apps">
      <SectionTitle section={section} />
      <div className="row justify-content-center my-3">
        {Apps}
      </div>
    </div>

  )

  return apps
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default Apps
// ────────────────────────────────────────────────────────────────────────┘