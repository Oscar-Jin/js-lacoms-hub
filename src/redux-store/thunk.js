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
  console.log("update favorite site async")
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      favoriteSites: newFavoriteSites
    })
  }
}

export const udateAppsAsync = (newApps) => {
  console.log("update apps async")
  return (dispatch) => {
    db.collection("settings").doc("public").update({
      savedApps: newApps
    }) 
  }
}
// ────────────────────────────────────────────────────────────────────────┘ 