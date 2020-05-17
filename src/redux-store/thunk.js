// ────────────────────────────────────────────────────────── import 📥 ───┐
import db from "../firebase/firestore"
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── thunks 🌳 ───┐

export const syncStateAsync = () => {
  return (dispatch) => {
    db.collection("settings").doc("public").get().then(doc => {
      dispatch({
        type: "SYNC_STATE",
        payload: doc.data()
      })
    })
  }
}

export const updateFavoriteSitesAsync = (newFavoriteSites) => {
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      favoriteSites: newFavoriteSites
    })
  }
}

export const udateAppsAsync = (newApps) => {
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      savedApps: newApps
    }) 
  }
}

export const updateShoutoutsAsync = (newShoutouts) => {
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      shoutouts: newShoutouts
    }) 
  }
}

export const updateMorningAssemblyItemsAsync = (newMorningAssemblyItems) => {
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      morningAssemblyItems: newMorningAssemblyItems
    }) 
  }
}

export const updateSalesTargetsAsync = (newSalesTargets) => {
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      salesTargets: newSalesTargets
    })
  }
}

// ────────────────────────────────────────────────────────────────────────┘ 

// ───────────────────────────────────────────────── action creators 🐙 ───┐
export const updateShoutoutIndex = (index) => {
  return {
    type: "UPDATE_INDEX",
    payload: {
      shoutoutIndex: index
    }
  }
}

export const updateShouldRenderAddMorningAssemblyItemModal = (bool) => {
  return {
    type: "UPDATE_SHOULDRENDER",
    payload: {
      shouldRenderAddMorningAssemblyItemModal: bool
    }
  }
}

// export const updateSalesTargetsLocalOnly = (salesTargets) => {
//   return {
//     type: "UPDATE_TARGETS",
//     payload: {
//       salesTargets,
//     }
//   }
// }
// ────────────────────────────────────────────────────────────────────────┘