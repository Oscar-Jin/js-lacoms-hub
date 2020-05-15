// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery"

import { updateFavoriteSitesAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const RemoveSiteModal = (props) => {
  let { favoriteSites, dispatch } = props
  let sitesCanBeRemoved = favoriteSites.filter(site => !!site.id)
  let sitesCannotBeRemoved = favoriteSites.filter(site => !site.id)

  let onRemoveSiteClicked = (e) => {
    console.dir(e.target.id)
    let remainingSites = favoriteSites.filter(site => site.id !== e.target.id)
    $("#removeSiteModal").modal('hide')
    dispatch(updateFavoriteSitesAsync(remainingSites))
  }

  let UnremovableSites = sitesCannotBeRemoved.map(site => (
    <li className="removeSite-list-group-item" key={JSON.stringify(site)}>
    <div className="d-flex">
      <div className="left-display">
        <p className="m-0 text-muted">{site.title}</p>
      </div>
      <div>
          <i className="fas fa-lock text-muted"></i>
      </div>
    </div>
  </li>
  ))

  let RemovableSites = sitesCanBeRemoved.map(site => (
    <li className="removeSite-list-group-item" key={JSON.stringify(site)}>
      <div className="d-flex justify-content-between">
        <div className="left-display">
          <p className="m-0" style={{color: site.color}}>{site.title}</p>
          <p className="site-url">{site.url}</p>
          <p className="site-createdBy">Created by: {site.createdBy}</p>
        </div>
          <button className="btn btn-sm btn-outline-danger" id={site.id} onClick={onRemoveSiteClicked}>削除</button>
      </div>
    </li>
  ))



  let removeSiteModal = (
    <div className="modal fade" id="removeSiteModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">{"ウェブサイトの削除"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {UnremovableSites}
              <br />
              {RemovableSites}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  )

  return removeSiteModal
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(RemoveSiteModal)
//─────────────────────────────────────────────────────────────────────────┘