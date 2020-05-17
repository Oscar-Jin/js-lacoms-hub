// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import $ from "jquery"

import { updateMorningAssemblyItemsAsync } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AddMorningAssemblyItemModal = (props) => {
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [itemNumber, setItemNumber] = useState(1)
  const [instructorName, setInstructorName] = useState('')
  const [url, setUrl] = useState('')

  let nameList = ["", ...props.instructors]
  let NameOptions = nameList.map(name => (<option key={name}>{name}</option>))
  let NumberOptions = props.morningAssemblyItems.map((item, index) => (<option key={index + 1}>{index + 1}</option>))

  let clearUserInputs = () => {
    setTitle('')
    setSubTitle('')
    setInstructorName('')
    setItemNumber(1)
    setUrl('')
  }

  let onTitleChange = (e) => {
    // console.dir([...e.target.classList].includes("border"))
    setTitle(e.target.value)
  }
  let onSubTitleChange = (e) => {
    setSubTitle(e.target.value)
  }
  let onUrlChange = (e) => {
    setUrl(e.target.value)
  }
  let onItemNumberChange = (e) => {
    setItemNumber(e.target.value)
  }
  let onInstructorNameChange = (e) => {
    setInstructorName(e.target.value)
  }


  let onAddButtonClick = (e) => {
    if (!title || !subTitle || !subTitle) { return false }

    const newItem = {
      title: title,
      subTitle: subTitle,
      id: v4(),
      createdBy: instructorName,
      url: url,
    }

    let assemblyItems = [...props.morningAssemblyItems]
    assemblyItems.splice(itemNumber - 1, 0, newItem)

    props.dispatch(
      updateMorningAssemblyItemsAsync(assemblyItems)
    )

    $("#addMorningAssemblyItemModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#addMorningAssemblyItemModal').on('hidden.bs.modal', clearUserInputs)


  let modalForm = (
    <div className="modal fade" id="addMorningAssemblyItemModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"チェックリストの追加"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form >
              <div className="form-group">
                <label htmlFor="assembly-title" className="col-form-label">タイトル：</label>
                <input type="text" className="form-control" id="assembly-title" placeholder="時間割の確認（例）" onChange={onTitleChange} autoComplete="off" value={title} />
                <label htmlFor="assembly-subtitle" className="col-form-label">サブタイトル</label>
                <input type="text" className="form-control" id="assembly-subtitle" placeholder="担当する生徒を確認すること（例）" onChange={onSubTitleChange} autoComplete="off" value={subTitle} />
              </div>
              <div className="form-group">
                <label htmlFor="assembly-url" className="col-form-label">リンク： (オプション)</label>
                <input type="url" className="form-control" id="assembly-url" placeholder="" onChange={onUrlChange} autoComplete="off" value={url} />
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label htmlFor="assembly-itemNumber" className="col-form-label">番号：</label>
                    <select className="form-control" id="assembly-itemNumber" onChange={onItemNumberChange} value={itemNumber}>
                      {NumberOptions}
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="assembly-createdby" className="col-form-label">講師：</label>
                    <select className="form-control" id="assembly-createdby" onChange={onInstructorNameChange} value={instructorName}>
                      {NameOptions}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">キャンセル</button>
            <button type="button" className="btn btn-primary" onClick={onAddButtonClick} disabled={!title || !subTitle || !subTitle}>追加する</button>
          </div>
        </div>
      </div>
    </div>
  )


  return modalForm
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(AddMorningAssemblyItemModal)
// ────────────────────────────────────────────────────────────────────────┘