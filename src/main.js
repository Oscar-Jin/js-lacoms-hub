// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './redux-store/store'
import db from "./firebase/firestore"
import moment from 'moment';

import 'bootstrap'
import './style/styles.scss'
import { syncStateAsync, updateShoutoutIndex } from './redux-store/thunk'


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

// setInterval(() => {
//   let { shoutouts, shoutoutIndex } = store.getState()
//   shoutoutIndex < shoutouts.length - 1 ?
//     store.dispatch(updateShoutoutIndex(shoutoutIndex + 1)) :
//     store.dispatch(updateShoutoutIndex(0))
// }, 8000)

// ────────────────────────────────────────────────────────────────────────┘


// ────────────────────────────────────────────────────── firebase init ───┐
//  db.collection("settings").doc("public").update({
//   salesTargets: salesTargets
//  })

// ────────────────────────────────────────────────────────────────────────┘