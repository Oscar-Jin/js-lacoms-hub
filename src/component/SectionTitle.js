// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import $ from "jquery"

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
let SectionTitle = (props) => {
  let [showRemoveButton, setShowRemoveButton] = useState(false)
  let { section } = props

  let onAddButtonClick = () => {
    $(section.addButtonTargetId).modal('show')
  }

  let onRemoveButtonClick = () => {
    $(section.removeButtonTargetId).modal('show')
  }

  let onMouseOver = () => {
    console.log("mouse over")
    setShowRemoveButton(true)
  }

  let onMouseLeave = () => {
    console.log("mouse out")
    setShowRemoveButton(false)
  }


  let sectionTitle = (
    <div className="SectionTitle">
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <h1 className="mb-0">{section.title} &nbsp;<i className={section.favicon}></i></h1>
          <p className="mb-0 text-muted subtitle">{section.subTitle}</p>
        </div>
        {
          section.enableAdd &&
          <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {showRemoveButton && <button className="btn btn-lg mb-2" id="removeButton" onClick={onRemoveButtonClick}>
              <i className="fas fa-minus text-secondary"></i>
            </button>}
            <button className="btn btn-lg mb-2" id="addButton" onClick={onAddButtonClick}>
              <i className="fas fa-plus text-secondary" />
            </button>
          </div>

        }
      </div>
    </div >
  )

  return sectionTitle
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default SectionTitle
// ────────────────────────────────────────────────────────────────────────┘