// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './redux-store/store'
import db from "./firebase/firestore"

import 'bootstrap'
import './style/styles.scss'
import { syncStateAsync } from './redux-store/thunk'
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













// ─────────────────────────────────────────── TEMP USE: firestore init ───┐
// db.collection("settings").doc("system-backup").set({
//   favoriteSites: [{
//     title: "Google カレンダー",
//     url: "https://calendar.google.com/calendar/r",
//     createdBy: "管理者",
//     imgKey: "googleCalendar"
//   }, {
//     title: "2020生徒講師管理Suite",
//     url: "https://docs.google.com/spreadsheets/d/1UEOt3BQ-Uy96RD2P7bNfFcq3XC6DiukRhnbwyYpJSQg/",
//     createdBy: "管理者",
//     imgKey: "kanriAdmin"
//   }, {
//     title: "授業変更フォーム",
//     url: "https://docs.google.com/forms/d/e/1FAIpQLSdQVM0ygr6WW6NKungHOuynxEXhWZ4S14HJx8xmUpLhHaMqvw/viewform",
//     createdBy: "管理者",
//     imgKey: "henkoForm"
//   }, {
//     title: "LINE WORKS",
//     url: "https://auth.worksmobile.com/login/login?accessUrl=https://talk.worksmobile.com/#/",
//     createdBy: "管理者",
//     imgKey: "lineWorks"
//   }, {
//     title: "SUPER かつかいしゅう",
//     url: "https://www3.nss-jp2.com/katsu_login.jsp",
//     createdBy: "管理者",
//     imgKey: "katsukaisyu"
//   }, {
//     title: "運営パッケージ",
//     url: "https://docs.google.com/spreadsheets/d/13evTFxErYOqYhn-mogukWD1ho2PPNMtNew0pHB5sNRQ/edit#gid=1101536272",
//     createdBy: "管理者",
//     imgKey: "uneiPackage"
//   }],

//   savedApps: [{
//     title: "Gmail",
//     url: "https://mail.google.com/mail/",
//     favicon: "fas fa-envelope",
//     buttonColor: "btn-danger"
//   }, {
//     title: "Dropbox",
//     url: "https://www.dropbox.com/h",
//     favicon: "fab fa-dropbox",
//     buttonColor: "btn-primary"
//   }, {
//     title: "Google Sheets",
//     url: "https://docs.google.com/spreadsheets/u/0/",
//     favicon: "fas fa-table",
//     buttonColor: "btn-success"
//   }, {
//     title: "Google",
//     url: "https://www.google.co.jp/",
//     favicon: "fab fa-google",
//     buttonColor: "btn-info"
//   }, {
//     title: "Google Form",
//     url: "https://docs.google.com/forms/",
//     favicon: "fas fa-file-alt",
//     buttonColor: "btn-dark"
//   },{
//     title: "Lacoms Link",
//     url: "https://link.lacoms-online.com/admin/login.php",
//     favicon: "fas fa-globe",
//     buttonColor: "btn-secondary"
//   }, {
//     title: "COM単生徒管理",
//     url: "https://school.lacoms-comtan.com/school_users/login",
//     favicon: "fas fa-chalkboard-teacher",
//     buttonColor: "btn-secondary"
//   }, {
//     title: "COM単",
//     url: "https://app.lacoms-comtan.com/users/login",
//     favicon: "fas fa-graduation-cap",
//     buttonColor: "btn-warning"
//   }, {
//     title: "COM G",
//     url: "https://xof5rp7w.sakura.ne.jp/app?CPC=1",
//     favicon: "fas fa-graduation-cap",
//     buttonColor: "btn-danger"
//   }]
// })

//  db.collection("settings").doc("public").update({
//    instructors: ["水野", "金村", "向井", "坂井", "金丸", "日永", "赤嶺", "遠藤", "鈴木", "高嶋",　"吳", "神崎", "金ちゃん"]
//  })

//  db.collection("settings").doc("public").update({
//   experimentSites: [{
//         title: "朝礼ガイドブック",
//         url: "morning-assembly",
//         createdBy: "管理者",
//         imgKey: "morningAssembly"
//       }]
//  })


// ────────────────────────────────────────────────────────────────────────┘