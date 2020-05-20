// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { connect } from 'react-redux'
import $ from "jquery"

import { updateInstructorsAsync } from '../redux-store/thunk'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AddInstructorModal = (props) => {
  const [instructorName, setInstructorName] = useState('')

  let clearUserInputs = () => {
    setInstructorName('')
  }

  let onInstructorNameChange = (e) => {
    const userInput = e.target.value
    setInstructorName(userInput)
  }

  let onAddButtonClick = (e) => {
    if (!instructorName) { return false }

    const newInstructor = instructorName

    props.dispatch(
      updateInstructorsAsync([...props.instructors, newInstructor])
    )

    $("#addInstructorModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#addInstructorModal').on('hidden.bs.modal', clearUserInputs)

  let modal = (
    <div className="modal fade" id="addInstructorModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"講師の追加"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {props.instructors.map(instructor => (
                <li className="instructor-list-group-item p-0" key={JSON.stringify(instructor)}>
                  <div className="d-flex p-2 pl-3">
                    <div className="left-display">
                      <p className="m-0 text-muted">{instructor}</p>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
            <form >
              <div className="form-group">
                <label htmlFor="website-name" className="col-form-label">追加する講師：</label>
                <input type="text" className="form-control" id="website-name" placeholder="佐々木（例）" onChange={onInstructorNameChange} autoComplete="off" value={instructorName} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
            <button type="button" className="btn btn-primary" onClick={onAddButtonClick} disabled={!instructorName}>追加する</button>
          </div>
        </div>
      </div>
    </div>
  )

  return modal
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => {
  return {
    instructors: state.instructors
  }
})(AddInstructorModal)
// ────────────────────────────────────────────────────────────────────────┘