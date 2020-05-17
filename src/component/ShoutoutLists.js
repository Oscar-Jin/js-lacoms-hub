// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import $ from "jquery"

/* ⬆NPM ⬇CUSTOM */
import { updateShoutoutsAsync } from '../redux-store/thunk'

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const ShoutoutLits = (props) => {
  let { shoutouts, dispatch } = props


  let todaysShoutouts = shoutouts.filter(shoutout => moment().date() === moment(shoutout.dateToDisplay.toDate()).date())
  let tomorrowsShoutouts = shoutouts.filter(shoutout => moment(moment().add(1, 'days')).date() === moment(shoutout.dateToDisplay.toDate()).date())
  let addTheDayAfterTomorrowShoutouts = shoutouts.filter(shoutout => moment(moment().add(2, 'days')).date() === moment(shoutout.dateToDisplay.toDate()).date())

  let onRemoveButtonClick = (e) => {
    let remainingShoutouts = shoutouts.filter(shoutout => shoutout.id !== e.target.id)
    dispatch(updateShoutoutsAsync(remainingShoutouts))
  }

  let onAddButtonClick = (e) => {
    $("#addShoutoutModal").modal('show')
  }
 
  let shoutoutLits = (
    <div className="container ShoutoutLits">

      <div className="mt-4 p-3 shadow-sm rounded bg-white">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <h3 >Today</h3>
          </div>
          <button className="btn btn-lg mt-2" id="addTodayButton" onClick={onAddButtonClick}>
            <i className="fas fa-plus text-secondary" />
          </button>
        </div>
        {todaysShoutouts.map(shoutout => (
          <li className="shoutout-list-group-item " key={JSON.stringify(shoutout)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div className={"line-bar " + shoutout.bgColor}></div>

                <div className="">
                  <p className="m-0 text-muted">{shoutout.createdBy} <i className="far fa-comment"></i></p>
                  <p className="m-0 shoutout-list-content">{shoutout.content}</p>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-danger" id={shoutout.id} onClick={onRemoveButtonClick}>削除</button>
            </div>
          </li>
        ))}
      </div>

      <div className="mt-4 p-3 shadow-sm rounded bg-white">
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <h3>Tomorrow</h3>
          </div>
          <button className="btn btn-lg mt-2" id="addTomorrowButton" onClick={onAddButtonClick}>
            <i className="fas fa-plus text-secondary" />
          </button>
        </div>
        {tomorrowsShoutouts.map(shoutout => (
          <li className="shoutout-list-group-item " key={JSON.stringify(shoutout)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div className={"line-bar " + shoutout.bgColor}></div>

                <div className="">
                  <p className="m-0 text-muted">{shoutout.createdBy} <i className="far fa-comment"></i></p>
                  <p className="m-0 shoutout-list-content">{shoutout.content}</p>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-danger" id={shoutout.id} onClick={onRemoveButtonClick}>削除</button>
            </div>
          </li>
        ))}
      </div>

      <div className="mt-4 p-3 shadow-sm rounded bg-white">
        <div className="d-flex justify-content-between align-items-end">
          <div >
            <h3 >The Day After Tomorrow</h3>
          </div>
          <button className="btn btn-lg mt-2" id="addTheDayAfterTomorrowButton" onClick={onAddButtonClick} >
            <i className="fas fa-plus text-secondary" />
          </button>
        </div>
        {addTheDayAfterTomorrowShoutouts.map(shoutout => (
          <li className="shoutout-list-group-item " key={JSON.stringify(shoutout)}>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row">
                <div className={"line-bar " + shoutout.bgColor}></div>

                <div className="">
                  <p className="m-0 text-muted">{shoutout.createdBy} <i className="far fa-comment"></i></p>
                  <p className="m-0 shoutout-list-content">{shoutout.content}</p>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-danger" id={shoutout.id} onClick={onRemoveButtonClick}>削除</button>
            </div>
          </li>
        ))}
      </div>

    </div >
  )

  return shoutoutLits
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(ShoutoutLits)
// ────────────────────────────────────────────────────────────────────────┘