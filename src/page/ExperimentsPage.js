// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

import Navbar from '../component/Navbar'
import Experiments from '../component/Experiments'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const ExperimentsPage = (props) => {
  let experimentsPage = (
    <div className="ExperimentsPage">
      <Navbar />
      <Experiments />


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
