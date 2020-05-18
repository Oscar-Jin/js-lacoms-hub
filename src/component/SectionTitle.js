// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import $ from "jquery"
import { CSSTransition } from 'react-transition-group'

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
    setShowRemoveButton(true)
  }

  let onMouseLeave = () => {
    setShowRemoveButton(false)
  }

  let onMouseLeaveSlow = () => {
    setTimeout(() => {
      setShowRemoveButton(false)
    }, 400)
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
          <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onTouchStart={onMouseOver} onTouchCancel={onMouseLeave} onTouchEnd={onMouseLeaveSlow}>
            <CSSTransition in={showRemoveButton} unmountOnExit timeout={200} classNames="fade" >
              <button className="btn btn-lg mb-2" id="removeButton" onClick={onRemoveButtonClick}>
                <i className="fas fa-minus text-secondary"></i>
              </button>
            </CSSTransition>
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