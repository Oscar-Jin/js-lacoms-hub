// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

import Navbar from '../component/Navbar'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const duration = 300;

function Sample() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {<h1>Hello!</h1>}
      </Transition>
      <button onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}




const TasksPage = (props) => {
  let tasksPage = (
    <div className="TasksPage">
      <Navbar />
      <h1 className="text-center">Under Development</h1>
      <div className="pt-4 pb-1">
        <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>

      <Sample />



    </div>
  )

  return tasksPage
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default TasksPage
// ────────────────────────────────────────────────────────────────────────┘