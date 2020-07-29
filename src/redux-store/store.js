// ───────────────────────────────────────────────────────── imports 📥 ───┐
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ──────────────────────────────────────────────────────── reducers 🎯 ───┐
const favoriteSiteReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.favoriteSites ?
        [...action.payload.favoriteSites] :
        state
    default:
      return state
  }
}

const savedAppsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.savedApps ?
        [...action.payload.savedApps] :
        state
    default:
      return state
  }
}

const instructorsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.instructors ?
        [...action.payload.instructors] :
        state
    default:
      return state
  }
}

const experimentSitesReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.experimentSites ?
        [...action.payload.experimentSites] :
        state
    default:
      return state
  }
}

const shoutoutsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.shoutouts ?
        [...action.payload.shoutouts] :
        state
    default:
      return state
  }
}

const todaysShoutoutReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_TODAYS_SHOUTOUTS":
      return action.payload.todaysShoutouts
    default:
      return state
  }
}

const shoutoutIndexReducer = (state = 0, action) => {
  // console.log(action)
  switch (action.type) {
    case "UPDATE_INDEX":
      return action.payload.shoutoutIndex
    default:
      return state
  }
}

const morningAssemblyItemsReducer = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.morningAssemblyItems ?
        [...action.payload.morningAssemblyItems] :
        state
    default:
      return state
  }
}

const salesTargetsReducer = (state = [], action) => {
  switch (action.type) {
    case "SYNC_STATE":
      return action.payload.salesTargets ?
        [...action.payload.salesTargets] :
        state
    // case "UPDATE_TARGETS":
    //   console.log("UPDATE_TARGETS FIRED")
    //   return action.payload.salesTargets
    default:
      return state
  }
}

const shouldRenderAddMorningAssemblyItemModalReducer = (state = false, action) => {
  //  console.log(action)
  switch (action.type) {
    case "UPDATE_SHOULDRENDER":
      return action.payload.shouldRenderAddMorningAssemblyItemModal
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
    shoutoutIndex: shoutoutIndexReducer,
    morningAssemblyItems: morningAssemblyItemsReducer,
    salesTargets: salesTargetsReducer,
    shouldRenderAddMorningAssemblyItemModal: shouldRenderAddMorningAssemblyItemModalReducer,
    todaysShoutouts: todaysShoutoutReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)
// ────────────────────────────────────────────────────────────────────────┘

// ───────────────────────────────────────────────────────── exports 📤 ───┐
export default store
// ────────────────────────────────────────────────────────────────────────┘
