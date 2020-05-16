// ───────────────────────────────────────────────────────── imports 📥 ───┐
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ──────────────────────────────────────────────────────── reducers 🎯 ───┐
const favoriteSiteReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.favoriteSites]
    default:
      return state
  }
}

const savedAppsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.savedApps]
    default:
      return state
  }
}

const instructorsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.instructors]
    default:
      return state
  }
}

const experimentSitesReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.experimentSites]
    default:
      return state
  }
}

const shoutoutsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return [...action.payload.shoutouts]
    default:
      return state
  }
}

const shoutoutIndexReducer = (state = 0, action) =>  {
  console.log(action)
  switch (action.type) {
    case "UPDATE_INDEX":
      return action.payload.shoutoutIndex
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
    experimentSites: experimentSitesReducer,
    shoutouts: shoutoutsReducer,
    shoutoutIndex: shoutoutIndexReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────────── exports 📤 ───┐
export default store
// ────────────────────────────────────────────────────────────────────────┘

