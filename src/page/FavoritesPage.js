// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'

import Navbar from '../component/Navbar'
import Favorites from '../component/Favorites'
import Apps from '../component/Apps'
import AddWebsiteModal from '../component/AddWebsiteModal'
import RemoveSiteModal from '../component/RemoveSiteModal'
import AddAppModal from '../component/AddAppModal'
import RemoveAppModal from '../component/RemoveAppModal'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const FavoritesPage = (props) => {
  let favoritesPage = (
    <div className="FavoritesPage">
      <Navbar />
      <Favorites />
      <Apps />
      <AddWebsiteModal />
      <RemoveSiteModal />
      <AddAppModal />
      <RemoveAppModal />
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