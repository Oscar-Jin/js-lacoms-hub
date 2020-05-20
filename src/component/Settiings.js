// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
// import { connect } from 'react-redux'
import $ from "jquery"
/* ⬆NPM ⬇CUSTOM */
import SectionTitle from './SectionTitle'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Settings = (props) => {
  let section = {
    title: "Settings",
    subTitle: "アプリの設定画面",
    favicon: "fas fa-cog text-secondary",
    enableAdd: false,
  }

  // let Apps = props.savedApps.map(app => (
  //   <div key={JSON.stringify(app)} className="col-auto my-3">
  //     <a className={"app-button " + app.buttonColor} href={app.url}>
  //       <i className={"fa-3x w-100 p-1 " + app.favicon} /><br />
  //       <span>{app.title}</span>
  //     </a>
  //   </div>
  // ))

  let showAddInstructorModal = () => {
    $("#addInstructorModal").modal('show')
  }

  let showRemoveInstructorModal = () => {
    $("#removeInstructorModal").modal('show')
  }

  let settings = (
    <div className="container Settings">
      <SectionTitle section={section} />
      <div className="row my-3 p-4">

        <div className="settings-card col-sm-3 p-2">
          <div className="text-center m-3 text-muted">
            <i className="fas fa-user fa-3x"></i>
            <p className="mt-2">Instructor</p>
          </div>
          <div className="btn-group w-100" role="group">
            <button type="button" className="btn btn-outline-secondary" onClick={showRemoveInstructorModal}>
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-secondary" onClick={showAddInstructorModal}>
              <i className="fas fa-plus" />
            </button>
          </div>

        </div>


      </div>
    </div>
  )

  return settings
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default Settings
// ────────────────────────────────────────────────────────────────────────┘