// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { GithubPicker } from 'react-color';
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import $ from "jquery"

import { updateFavoriteSitesAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AddWebsiteModal = (props) => {
  const [websiteName, setWebsiteName] = useState('')
  const [websiteURL, setWebsiteURL] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [colorHex, setColorHex] = useState('')

  let nameList = ["", ...props.instructors]
  let NameOptions = nameList.map(name => (<option key={name}>{name}</option>))

  let clearUserInputs = () => {
    setWebsiteName('')
    setWebsiteURL('')
    setInstructorName('')
    setColorHex('')
  }

  let onWebsiteNameChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setWebsiteName(userInput)
  }
  let onwebsiteURLChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setWebsiteURL(userInput)
  }
  let onInstructorNameChange = (e) => {
    const userInput = e.target.value
    console.log(userInput)
    setInstructorName(userInput)
  }

  let onColorChangeComplete = (color, event) => {
    const selectedColor = color.hex
    document.getElementById("color-drop").style.backgroundColor = selectedColor
    console.log(selectedColor)
    setColorHex(selectedColor)
  }



  let onAddButtonClick = (e) => {
    if (!websiteName || !websiteURL || !instructorName || !colorHex) { return false }

    const newSite = {
      title: websiteName,
      url: websiteURL,
      createdBy: instructorName,
      imgKey: null,
      color: colorHex,
      id: v4()
    }

    props.dispatch(
      updateFavoriteSitesAsync([...props.favoriteSites, newSite])
    )

    $("#addWebsiteModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#addWebsiteModal').on('hidden.bs.modal', clearUserInputs)


  let modalForm = (
    <div className="modal fade" id="addWebsiteModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"ウェブサイトの追加"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form >
              <div className="form-group">
                <label htmlFor="website-name" className="col-form-label">サイト名：</label>
                <input type="text" className="form-control" id="website-name" placeholder="YouTube（例）" onChange={onWebsiteNameChange} autoComplete="off" value={websiteName} />
                <label htmlFor="website-url" className="col-form-label">URL：</label>
                <input type="url" className="form-control" id="website-url" placeholder="https://www.youtube.com/" onChange={onwebsiteURLChange} autoComplete="off" value={websiteURL} />
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label className="col-form-label">カラー：</label><span id="color-drop" style={{backgroundColor: colorHex}}>　</span>
                    <GithubPicker onChangeComplete={onColorChangeComplete} triangle="hide" colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF','#111111']}/>
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
            <button type="button" className="btn btn-primary" onClick={onAddButtonClick} disabled={!websiteName || !websiteURL || !instructorName || !colorHex}>追加する</button>
          </div>
        </div>
      </div>
    </div>
  )


  return modalForm
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(AddWebsiteModal)
// ────────────────────────────────────────────────────────────────────────┘