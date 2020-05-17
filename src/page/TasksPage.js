// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

import Navbar from '../component/Navbar'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐


const TasksPage = (props) => {
  let tasksPage = (
    <div className="TasksPage">
      <Navbar />
      <div className="container bg-white rounded shadow-sm mt-5 p-5">
        <h1 className="text-center text-muted">Comming Soon...</h1>
      </div>

      <div className="pt-4 pb-1">
        <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>





    </div>
  )

  return tasksPage
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default TasksPage
// ────────────────────────────────────────────────────────────────────────┘