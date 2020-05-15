// ───────────────────────────────────────────────────────── imports 📥 ───┐
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
// const tempFavorites = [{
//   title: "Google カレンダー",
//   url: "https://calendar.google.com/calendar/r",
//   createdBy: "管理者",
//   imgKey: "googleCalendar"
// }, {
//   title: "2020生徒講師管理Suite",
//   url: "https://docs.google.com/spreadsheets/d/1UEOt3BQ-Uy96RD2P7bNfFcq3XC6DiukRhnbwyYpJSQg/",
//   createdBy: "管理者",
//   imgKey: "kanriAdmin"
// }, {
//   title: "授業変更フォーム",
//   url: "https://docs.google.com/forms/d/e/1FAIpQLSdQVM0ygr6WW6NKungHOuynxEXhWZ4S14HJx8xmUpLhHaMqvw/viewform",
//   createdBy: "管理者",
//   imgKey: "henkoForm"
// }, {
//   title: "LINE WORKS",
//   url: "https://auth.worksmobile.com/login/login?accessUrl=https://talk.worksmobile.com/#/",
//   createdBy: "管理者",
//   imgKey: "lineWorks"
// }]

// const tempSavedApps = [{
//   title: "Gmail",
//   url: "https://mail.google.com/mail/",
//   favicon: "fas fa-envelope",
//   buttonColor: "btn-danger"
// }, {
//   title: "Dropbox",
//   url: "https://www.dropbox.com/h",
//   favicon: "fab fa-dropbox",
//   buttonColor: "btn-primary"
// }, {
//   title: "Google Sheets",
//   url: "https://docs.google.com/spreadsheets/u/0/",
//   favicon: "fas fa-table",
//   buttonColor: "btn-success"
// }, {
//   title: "Google",
//   url: "https://www.google.co.jp/",
//   favicon: "fab fa-google",
//   buttonColor: "btn-info"
// }, {
//   title: "Google Form",
//   url: "https://docs.google.com/forms/",
//   favicon: "fas fa-file-alt",
//   buttonColor: "btn-dark"
// }]

// ────────────────────────────────────────────────────────────────────────┘

// ──────────────────────────────────────────────────────── reducers 🎯 ───┐
const favoriteSiteReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.favoriteSites]
    default:
      return state
  }
}

const savedAppsReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.savedApps]
    default:
      return state
  }
}

const instructorsReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.instructors]
    default:
      return state
  }
}

const experimentSitesReducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.experimentSites]
    default:
      return state
  }
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── store 📦 ───┐
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(
  combineReducers({
    favoriteSites: favoriteSiteReducer,
    savedApps: savedAppsReducer,
    instructors: instructorsReducer,
    experimentSites: experimentSitesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────────── exports 📤 ───┐
export default store
// ────────────────────────────────────────────────────────────────────────┘

