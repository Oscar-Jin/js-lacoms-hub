// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './redux-store/store'
import db from "./firebase/firestore"
import moment from 'moment'

import './style/styles.scss'
import { syncStateAsync, updateShoutoutIndex, updateShoutoutsAsync, updateTodaysShoutout } from './redux-store/thunk'


// ────────────────────────────────────────────────────────────────────────┘

// ──────────────────────────────────────────────────────────── sync 🔥 ───┐
db.collection("settings").doc("public").onSnapshot(snapshot => {
  store.dispatch(syncStateAsync())
})
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────────────── App 🐳 ───┐
const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────── remove spinner ───┐
document.getElementById("spinner").remove()
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── redner 🖼 ───┐
ReactDOM.render(App, document.getElementById("root"))
// ────────────────────────────────────────────────────────────────────────┘



// ─────────────────────────────────────────────────────── set interval ───┐
setInterval(() => {
  if (document.getElementById("clock")) {
    document.getElementById("clock").innerText = moment().format("MMM[]D[  ]LT")
    console.log("tick tock")
  }
}, 1000)





setInterval(() => {
  let shoutouts = store.getState().shoutouts
  let shoutoutIndex = store.getState().shoutoutIndex

  let filteredShoutouts = shoutouts.filter(shoutout => {
    return moment(shoutout.dateToDisplay.toDate()).date() >= moment().date() || moment(shoutout.dateToDisplay.toDate()).month() > moment().month() || moment(shoutout.dateToDisplay.toDate()).year() > moment().year()
  })

  if (filteredShoutouts.length !== shoutouts.length) {
    store.dispatch(updateShoutoutsAsync(filteredShoutouts))
  }

  let todaysShoutouts = store.getState().todaysShoutouts
  let newTodaysShoutouts = shoutouts.filter(shoutout => moment().date() === moment(shoutout.dateToDisplay.toDate()).date())
  if (newTodaysShoutouts.length != todaysShoutouts.length) {
    console.log(newTodaysShoutouts.length, todaysShoutouts.length)
    store.dispatch(updateTodaysShoutout(newTodaysShoutouts))
  }

  if (shoutoutIndex < todaysShoutouts.length - 1) {
    store.dispatch(updateShoutoutIndex(shoutoutIndex + 1))
  } else {
    store.dispatch(updateShoutoutIndex(0))
  }
}, 9000)

// ────────────────────────────────────────────────────────────────────────┘


// ────────────────────────────────────────────────────── firebase init ───┐
//  db.collection("settings").doc("public").update({
//   salesTargets: salesTargets
//  })

// ────────────────────────────────────────────────────────────────────────┘