// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery"

import { udateAppsAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const RemoveAppModal = (props) => {
  let { savedApps, dispatch } = props
  let appsCanBeRemoved = savedApps.filter(app => !!app.id)
  let appsCannotBeRemoved = savedApps.filter(app => !app.id)

  let onRemoveAppClicked = (e) => {
    console.dir(e.target.id)
    let remainingApps = savedApps.filter(app => app.id !== e.target.id)
    $("#removeAppModal").modal('hide')
    dispatch(udateAppsAsync(remainingApps))
  }

  let UnremovableApps = appsCannotBeRemoved.map(app => (
    <li className="removeSite-list-group-item" key={JSON.stringify(app)}>
      <div className="d-flex">
        <div className="left-display">
          <p className="m-0 text-muted">{app.title}</p>
        </div>
        <div>
            <i className="fas fa-lock text-muted"></i>
        </div>
      </div>
    </li>
  ))

  let RemovableApps = appsCanBeRemoved.map(app => (
    <li className="removeSite-list-group-item" key={JSON.stringify(app)}>
      <div className="d-flex justify-content-between">
        <div className="left-display">
          <p className="m-0">{app.title}</p>
          <p className="site-url">{app.url}</p>
          <p className="site-createdBy">Created by: {app.createdBy}</p>
        </div>
        <button className="btn btn-sm btn-outline-danger" id={app.id} onClick={onRemoveAppClicked}>削除</button>
      </div>
    </li>
  ))

  let removeAppModal = (
    <div className="modal fade" id="removeAppModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">{"ウェブアプリの削除"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {UnremovableApps}
              <br />
              {RemovableApps}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  )

  return removeAppModal
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(RemoveAppModal)
//─────────────────────────────────────────────────────────────────────────┘