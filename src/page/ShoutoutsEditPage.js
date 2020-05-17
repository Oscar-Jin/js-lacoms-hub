// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import Navbar from '../component/Navbar'
import ShoutoutLists from '../component/ShoutoutLists'
import AddShoutoutModal from '../component/AddShoutoutModal'



// ────────────────────────────────────────────────────────────────────────┘


// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const ShoutoutsEditPage = (props) => {
  let shoutoutsEditPage = (
      <div className="ShoutoutsEditPage">
        <Navbar />
        <ShoutoutLists />
        <AddShoutoutModal />
        <div className="pt-4 pb-1">
          <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
        </div>
      </div>
  )

  return shoutoutsEditPage
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default ShoutoutsEditPage
// ────────────────────────────────────────────────────────────────────────┘