// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

import Navbar from '../component/Navbar'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const ExperimentsPage = (props) => {
  let experimentsPage = (
    <div className="ExperimentsPage">
      <Navbar />
      <h1 className="text-center">Under Development</h1>
      <div className="pt-4 pb-1">
        <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>
    </div>
  )

  return experimentsPage
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default ExperimentsPage
// ────────────────────────────────────────────────────────────────────────┘