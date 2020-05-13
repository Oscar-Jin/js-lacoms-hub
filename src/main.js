// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './router/AppRouter'

import 'bootstrap'
import './style/styles.scss'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 📚 ───┐
const dashboard = {
  title: "Dashboard",
  icon: "fas fa-globe-asia fa-lg d-block mx-auto",
  path: "/"
}

const navItems = [dashboard]
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────────────── App 🐳 ───┐
const App = (
  <AppRouter />
)
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── redner 🖼 ───┐
ReactDOM.render(App, document.getElementById("root"))
// ────────────────────────────────────────────────────────────────────────┘