// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { GithubPicker } from 'react-color';
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import $ from "jquery"

import { udateAppsAsync } from '../redux-store/thunk'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AddAppModal = (props) => {
  const [appName, setAppName] = useState('')
  const [appURL, setAppURL] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [favicon, setFavicon] = useState('')
  const [colorHex, setColorHex] = useState('')


  let nameList = ["", ...props.instructors]
  let NameOptions = nameList.map(name => (<option key={name}>{name}</option>))

  let clearUserInputs = () => {
    setAppName('')
    setAppURL('')
    setInstructorName('')
    setFavicon('')
    setColorHex('')
  }

  let onAppNameChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setAppName(userInput)
  }
  let onAppURLChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setAppURL(userInput)
  }
  let onIconChange = (e) => {
    const iconId = e.target.id
    console.log(iconId)
    setFavicon("fas " + iconId)
  }
  let onInstructorNameChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setInstructorName(userInput)
  }

  let onColorChangeComplete = (color, event) => {
    const selectedColor = color.hex
    document.getElementById("app-color-drop").style.backgroundColor = selectedColor
    console.log(selectedColor)
    setColorHex(selectedColor)
  }


  let onAddButtonClick = (e) => {
    if (!appName || !appURL || !instructorName || !favicon || !colorHex) { return false }

    let btnClassName = ""
    switch (colorHex) {
      case "#dc3545":
        btnClassName = "btn-danger"
        break
      case "#007bff":
        btnClassName = "btn-primary"
        break
      case "#28a745":
        btnClassName = "btn-success"
        break
      case "#17a2b8":
        btnClassName = "btn-info"
        break
      case "#343a40":
        btnClassName = "btn-dark"
        break
      case "#6c757d":
        btnClassName = "btn-secondary"
        break
      case "#ffc107":
        btnClassName = "btn-warning"
      default:
        "btn-light"
    }



    const newApp = {
      title: appName,
      url: appURL,
      createdBy: instructorName,
      favicon: favicon,
      buttonColor: btnClassName,
      id: v4()
    }

    props.dispatch(
      udateAppsAsync([...props.savedApps, newApp])
    )

    $("#addAppModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#addAppModal').on('hidden.bs.modal', clearUserInputs)


  let addAppModal = (
    <div className="modal fade" id="addAppModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"ウェブアプリの追加"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form >
              <div className="form-group">
                <label htmlFor="website-name" className="col-form-label">アプリ名：</label>
                <input type="text" className="form-control" id="website-name" placeholder="Google Maps（例）" onChange={onAppNameChange} autoComplete="off" value={appName} />
                <label htmlFor="website-url" className="col-form-label">URL：</label>
                <input type="url" className="form-control" id="website-url" placeholder="https://www.google.com/maps" onChange={onAppURLChange} autoComplete="off" value={appURL} />
              </div>

              <div className="form-group">
                <label htmlFor="icon-picker" className="col-form-label">Icon：</label><br />
                <div className="btn-group btn-group-toggle" data-toggle="buttons" id="icon-picker">
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-address-book" onClick={onIconChange}/>
                    <i className="fas fa-address-book"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-book-open" onClick={onIconChange}/>
                    <i className="fas fa-book-open"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-bookmark" onClick={onIconChange}/>
                    <i className="fas fa-bookmark"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-box-open" onClick={onIconChange}/>
                    <i className="fas fa-box-open"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-calendar" onClick={onIconChange}/>
                    <i className="fas fa-calendar"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-camera" onClick={onIconChange}/>
                    <i className="fas fa-camera"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-clipboard" onClick={onIconChange}/>
                    <i className="fas fa-clipboard"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-folder" onClick={onIconChange}/>
                    <i className="fas fa-folder"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-grin" onClick={onIconChange}/>
                    <i className="fas fa-grin"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-grip-horizontal" onClick={onIconChange}/>
                    <i className="fas fa-grip-horizontal"></i>
                  </label>
                  <label className="btn btn-outline-secondary">
                    <input type="radio" name="options" id="fa-square" onClick={onIconChange}/>
                    <i className="fas fa-square"></i>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label className="col-form-label">カラー：</label><span id="app-color-drop" style={{ backgroundColor: colorHex }}>　</span>
                    <GithubPicker onChangeComplete={onColorChangeComplete} triangle="hide" colors={['#dc3545', '#007bff', '#28a745', '#17a2b8', '#ffc107', '#6c757d', '#343a40',]} />
                  </div>
                  <div className="col">
                    <label htmlFor="user-name" className="col-form-label">講師：</label>
                    <select className="form-control" onChange={onInstructorNameChange} value={instructorName}>
                      {NameOptions}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
            <button type="button" className="btn btn-primary" onClick={onAddButtonClick} disabled={!appName || !appURL || !instructorName || !favicon || !colorHex}>追加する</button>
          </div>
        </div>
      </div>
    </div>
  )




  return addAppModal
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(AddAppModal)
// ────────────────────────────────────────────────────────────────────────┘