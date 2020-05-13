// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
let SectionTitle = (props) => {
  let { section } = props

  let sectionTitle = (
    <div className="SectionTitle">
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <h1 className="mb-0">{section.title} &nbsp;<i className={section.favicon}></i></h1>
          <p className="mb-0 text-muted subtitle">{section.subTitle}</p>
        </div>
        {section.enableAdd &&
          <button className="btn btn-lg btn-link mb-2">
            <i className="fas fa-plus text-secondary"></i>
          </button>}
      </div>
    </div >
  )

  return sectionTitle
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default SectionTitle
// ────────────────────────────────────────────────────────────────────────┘