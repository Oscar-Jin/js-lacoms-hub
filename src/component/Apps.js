// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
/* ⬆NPM ⬇CUSTOM */
import SectionTitle from './SectionTitle'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Apps = (props) => {
  let section = {
    title: "Apps",
    subTitle: "作業に便利なアプリケーションたち",
    favicon: "fab fa-app-store-ios color-dodgerblue",
    enableAdd: true,
    addButtonTargetId: "#addAppModal",
    removeButtonTargetId: "#removeAppModal"
  }

  let Apps = props.savedApps.map(app => (
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
      <div className="row justify-content-center my-3 p-2">
        {Apps}
      </div>
    </div>
  )

  return apps
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(Apps)
// ────────────────────────────────────────────────────────────────────────┘