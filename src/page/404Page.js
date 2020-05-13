// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { Link } from "react-router-dom";

import Navbar from '../component/Navbar'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const NotFoundPage = (props) => {
  return (
    <div className="d-flex flex-column">
      <div style={{ height: "48vh" }}>
        <Navbar />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
        <div className="inline-block align-middle">
          <h2 className="font-weight-normal lead">お探しのページは見つかりませんでした</h2>
          <Link className="block" to="/">ホームページに戻る</Link>
        </div>
      </div>
    </div>
  )
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default NotFoundPage
// ────────────────────────────────────────────────────────────────────────┘