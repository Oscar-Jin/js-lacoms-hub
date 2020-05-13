// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

import Navbar from '../component/Navbar'
import Favorites from '../component/Favorites'
import Apps from '../component/Apps'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const FavoritesPage = (props) => {
  let favoritesPage = (
    <div className="FavoritesPage">
      <Navbar />
      <Favorites />
      <Apps />
      <div className="pt-4 pb-1">
        <p className="text-center text-light">LACOMS-HUB &nbsp; MADE WITH LOVE BY OSCAR JIN</p>
      </div>
    </div>
  )

  return favoritesPage
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default FavoritesPage
// ────────────────────────────────────────────────────────────────────────┘