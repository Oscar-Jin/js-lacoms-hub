// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

import Navbar from '../component/Navbar'
import Experiments from '../component/Experiments'
import Settings from '../component/Settiings'
import AddInstructorModal from '../component/AddInstructorModal'
import RemoveInstructorModal from '../component/RemoveInstructorModal'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const ExperimentsPage = (props) => {
  let experimentsPage = (
    <div className="ExperimentsPage">
      <Navbar />
      <Experiments />
      <Settings />

      <AddInstructorModal />
      <RemoveInstructorModal />

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
