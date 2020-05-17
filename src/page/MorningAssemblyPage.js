// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { connect } from 'react-redux'


import MorningAssembly from '../component/MorningAssembly';
import AddMorningAssemblyItemModal from '../component/AddMorningAssemblyItemModal'
import RemoveMorningAssemblyItemModal from '../component/RemoveMorningAssemblyItemModal';
import EditMorningAssemblyChartModal from '../component/EditMorningAssemblyChartModal';

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const MorningAssemblyPage = (props) => {
  let morningAssemblyPage = (
    <div className="MorningAssemblyPage">
      <MorningAssembly />

      <AddMorningAssemblyItemModal />
      <RemoveMorningAssemblyItemModal />
      {props.shouldRenderAddMorningAssemblyItemModal && <EditMorningAssemblyChartModal />}
      <div className="pt-4 pb-1">
        <p className="text-center text-ash">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>
    </div >
  )

  return morningAssemblyPage
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(MorningAssemblyPage)
// ────────────────────────────────────────────────────────────────────────┘

