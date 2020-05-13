// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { NavLink } from 'react-router-dom';

import favicon from '../../public/img/favicon-180x180.png' 
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const Navbar = (props) => {
  let navItems = props.navItems ? props.navItems : [{
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
    <nav className="lacoms-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="">
            <img src={favicon}></img>
            <span>LACOMS-HUB</span>
            <sup className="badge badge-light lacoms-version ml-2">1.0.7</sup>
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

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default Navbar
// ────────────────────────────────────────────────────────────────────────┘

