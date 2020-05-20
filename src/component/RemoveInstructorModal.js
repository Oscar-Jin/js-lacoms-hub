// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery"

import { updateInstructorsAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const RemoveInstructorModal = (props) => {
  let { instructors, dispatch } = props

  let instructorsCanBeRemoved = instructors.filter(name => name !== "水野")
  let instructorsCannotBeRemoved = instructors.filter(name => name === "水野")


  let onRemoveInstructorClicked = (e) => {
    let shouldDelete = confirm(`講師「${e.target.id}」の削除は復元不可操作です。本当に削除しますか？`)

    if (shouldDelete) {
      let remainingInstructors = instructors.filter(name => name !== e.target.id)
      $("#removeInstructorModal").modal('hide')
      dispatch(updateInstructorsAsync(remainingInstructors))
    } 


  }

  let UnrmovableInstructors = instructorsCannotBeRemoved.map(instructor => (
    <li className="instructor-list-group-item p-0" key={instructor + "-key"}>
      <div className="d-flex p-2 pl-3">
        <div className="left-display">
          <p className="m-0 text-muted">{instructor}</p>
        </div>
        <div>
          <i className="fas fa-lock text-muted"></i>
        </div>
      </div>
    </li>
  ))

  let RemovableInstructors = instructorsCanBeRemoved.map(instructor => (
    <li className="instructor-list-group-item p-0" key={instructor + "-key"}>
      <div className="d-flex justify-content-between p-2 pl-3">
        <div className="left-display">
          <p className="m-0">{instructor}</p>
        </div>
        <button className="btn btn-sm btn-outline-danger" id={instructor} onClick={onRemoveInstructorClicked}>削除</button>
      </div>
    </li>
  ))

  let removeInstructorModal = (
    <div className="modal fade" id="removeInstructorModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">{"講師の削除"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {UnrmovableInstructors}
              <br />
              {RemovableInstructors}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  )

  return removeInstructorModal
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => {
  return {
    instructors: state.instructors,
    dispatch: state.dispatch
  }
})(RemoveInstructorModal)
//─────────────────────────────────────────────────────────────────────────┘