// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import moment from 'moment';
import $ from "jquery"

import { updateShoutoutsAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AddShoutoutModal = (props) => {
  const [createdBy, setCreatedBy] = useState('')
  const [dateToDisplay, setdateToDisplay] = useState('Today')
  const [content, setContent] = useState('')
  const [bgColor, setBgColor] = useState('')


  let nameList = ["", ...props.instructors]
  let NameOptions = nameList.map(name => (<option key={name}>{name}</option>))
  let DateToDisplayOptions = ["Today", "Tomorrow", "The Day After Tomorrow"].map(item => (<option key={item}>{item}</option>))

  let clearUserInputs = () => {
    setCreatedBy('')
    setdateToDisplay('Today')
    setContent('')
    setBgColor('')
  }


  let ondateToDisplayChange = (e) => {
    // console.log(e.target.value)
    setdateToDisplay(e.target.value)
  }

  let onContentChange = (e) => {
    setContent(e.target.value)
  }

  let onBgColorChange = (e) => {
    // console.log(e.target.id)
    let newBgColor = ""

    switch (e.target.id) {
      case "bg-green":
        newBgColor = "bg-success"
        break;
      case "bg-blue":
        newBgColor = "bg-primary"
        break;
      case "bg-red":
        newBgColor = "bg-danger"
        break;
      case "bg-yellow":
        newBgColor = "bg-warning"
        break;
      default:
        newBgColor = "bg-light"
        break;
    }

    setBgColor(newBgColor)
  }

  let onInstructorNameChange = (e) => {
    setCreatedBy(e.target.value)
  }

  let onAddButtonClick = (e) => {
    if (!createdBy || !dateToDisplay || !content || !bgColor) { return false }

    let dateToDisplayInDateType = null
    switch (dateToDisplay) {
      case "Today":
        dateToDisplayInDateType = moment().toDate()
        break;
      case "Tomorrow":
        dateToDisplayInDateType = moment().add(1, 'days').toDate()
        break;
      case "The Day After Tomorrow":
        dateToDisplayInDateType = moment().add(2, 'days').toDate()
        break;
      default:
        dateToDisplayInDateType = moment().toDate()
    }

    const newShoutout = {
      bgColor: bgColor,
      content: content,
      createdBy: createdBy,
      dateToDisplay: dateToDisplayInDateType,
      id: v4(),
    }

    let newShoutouts = [...props.shoutouts, newShoutout]


    props.dispatch(
      updateShoutoutsAsync(newShoutouts)
    )

    $("#addShoutoutModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#addShoutoutModal').on('hidden.bs.modal', clearUserInputs)



  let modalForm = (
    <div className="modal fade" id="addShoutoutModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"Shoutoutの追加"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form >
              <div className="form-group">
                <label htmlFor="assembly-title" className="col-form-label">メッセージ <i className="far fa-comment"></i></label>
                <input type="text" className="form-control" id="assembly-title" placeholder="朝だよー、はよ起きろー" onChange={onContentChange} autoComplete="off" value={content} />
              </div>
              <div className="form-group">
                <div className="btn-group btn-group-toggle m-1" data-toggle="buttons" >
                  <label type="button" className="btn btn-outline-danger">
                    <input type="radio" name="options" id="bg-red" autoComplete="off" onClick={onBgColorChange} />赤
                </label>
                  <label type="button" className="btn btn-outline-primary">
                    <input type="radio" name="options" id="bg-blue" autoComplete="off" onClick={onBgColorChange} />青
                </label>
                  <label type="button" className="btn btn-outline-success">
                    <input type="radio" name="options" id="bg-green" autoComplete="off" onClick={onBgColorChange} />緑
                </label>
                  <label type="button" className="btn btn-outline-warning" >
                    <input type="radio" name="options" id="bg-yellow" autoComplete="off" onClick={onBgColorChange} />黄
                </label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="assembly-itemNumber" className="col-form-label">いつ？</label>
                    <select className="form-control" id="assembly-itemNumber" onChange={ondateToDisplayChange} value={dateToDisplay}>
                      {DateToDisplayOptions}
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="assembly-createdby" className="col-form-label">講師</label>
                    <select className="form-control" id="assembly-createdby" onChange={onInstructorNameChange} value={createdBy}>
                      {NameOptions}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
            <button type="button" className="btn btn-primary" onClick={onAddButtonClick} disabled={!createdBy || !dateToDisplay || !content || !bgColor}>追加する</button>
          </div>
        </div>
      </div>
    </div>
  )


  return modalForm
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(AddShoutoutModal)
// ────────────────────────────────────────────────────────────────────────┘