// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import $ from "jquery"

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── Navbar 🧱 ───┐
const MorningAssemblyNavbar = (props) => {
  let navItems = [{
    title: "Favorites",
    icon: "fas fa-star fa-lg d-block mx-auto",
    path: "/"
  }, {
    title: "Experiments",
    icon: "fas fa-flask fa-lg d-block mx-auto",
    path: "/experiments"
  }, {
    title: "Tasks",
    icon: "fas fa-tasks fa-lg d-block mx-auto",
    path: "/tasks"
  }]

  let NavItems = navItems.map(nav => (
    <div key={JSON.stringify(nav)}>
      <NavLink className="lacoms-navitem" activeClassName="active" to={nav.path} exact={true}>
        <i className={nav.icon}></i>
        <span className="title">{nav.title}</span>
      </NavLink>
    </div>
  ))

  let navbar = (
    <nav className="morningAssembly-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="">
            <span>LACOMS 朝礼ガイドブック</span>
            <sup className="badge lacoms-version ml-2">2.1.0</sup>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {NavItems}
          </div>
        </div>
      </div>
    </nav>
  )

  return navbar
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── Title 🧱 ───┐
const MorningAssemblyTitle = (props) => {
  let [showRemoveButton, setShowRemoveButton] = useState(false)

  let onAddButtonClick = () => {
    $("#addMorningAssemblyItemModal").modal('show')
  }

  let onRemoveButtonClick = () => {
    $("#removeMorningAssemblyItemModal").modal('show')
  }

  let onMouseOver = () => {
    setShowRemoveButton(true)
  }

  let onMouseLeave = () => {
    setShowRemoveButton(false)
  }

  let morningAssemblyTitle = (
    <div className="d-flex justify-content-between align-items-end">
      <div>
        <h2 className="text-muted mt-5">おはようございます。本日の朝礼を始めましょう。</h2>
      </div>
      {
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <CSSTransition in={showRemoveButton} unmountOnExit timeout={200} classNames="fade" >
            <button className="btn btn-lg" id="removeButton" onClick={onRemoveButtonClick}>
              <i className="fas fa-minus text-secondary"></i>
            </button>
          </CSSTransition>
          <button className="btn btn-lg" id="addButton" onClick={onAddButtonClick}>
            <i className="fas fa-plus text-secondary" />
          </button>
        </div>
      }
    </div>
  )

  return morningAssemblyTitle
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────── Container 🧱 ───┐
const MorningAseembly = (props) => {
  let morningAseembly = (
    <div className="MorningAseemblyContainer">
      <MorningAssemblyNavbar />
      <div className="container">
        <MorningAssemblyTitle />
        <hr /><br />
      </div>
    </div>
  )

  return morningAseembly
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(MorningAseembly)
// ────────────────────────────────────────────────────────────────────────┘