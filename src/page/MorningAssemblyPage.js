// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'

import MorningAssembly from '../component/MorningAssembly';

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const MorningAssemblyPage = (props) => {
  let morningAssemblyPage = (
    <div className="MorningAssemblyPage">
      <MorningAssembly />
      <div className="pt-4 pb-1">
        <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>
    </div >
  )

  return morningAssemblyPage
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default MorningAssemblyPage
// ────────────────────────────────────────────────────────────────────────┘
