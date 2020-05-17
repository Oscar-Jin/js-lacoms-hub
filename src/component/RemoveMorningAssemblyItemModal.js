// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery"

import { updateMorningAssemblyItemsAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const RemoveMorningAssemblyItemModal = (props) => {
  let { morningAssemblyItems, dispatch } = props

  let onRemoveAppClicked = (e) => {
    let itemClicked = morningAssemblyItems.find(item => item.id === e.target.id)　
    let shouldDelete = true 

    if (itemClicked.createdBy === "管理者") {
      shouldDelete = confirm(`「${itemClicked.title}」は初期管理者によって作成したものです。本当に削除しますか？`)
    }

    if (shouldDelete) {
      let remainingItems = morningAssemblyItems.filter(item => item.id !== e.target.id)
      $("#removeMorningAssemblyItemModal").modal('hide')
      dispatch(updateMorningAssemblyItemsAsync(remainingItems))
    } 
  }

  let RemovableApps = morningAssemblyItems.map((app, index) => (
    <li className="removeSite-list-group-item" key={JSON.stringify(app)}>
      <div className="d-flex justify-content-between">
        <div className="left-display">
          <p className="m-0">{`${index+1}. ${app.title}`}</p>
          <p className="site-url">{app.url ? app.url : "リンクなし"}</p>
          <p className="site-createdBy">Created by: {app.createdBy}</p>
        </div>
        <button className="btn btn-sm btn-outline-danger" id={app.id} onClick={onRemoveAppClicked}>削除</button>
      </div>
    </li>
  ))

  let removeMorningAssemblyItemModal = (
    <div className="modal fade" id="removeMorningAssemblyItemModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">{"チェックリストの削除"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
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

  return removeMorningAssemblyItemModal
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(RemoveMorningAssemblyItemModal)
//─────────────────────────────────────────────────────────────────────────┘