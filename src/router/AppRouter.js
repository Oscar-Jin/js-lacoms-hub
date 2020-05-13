// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FavoritesPage from '../page/FavoritesPage';
import ExperimentsPage from '../page/ExperimentsPage';
import NotFoundPage from '../page/404Page';

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FavoritesPage} exact={true} />
        <Route path="/experiments" component={ExperimentsPage} exact={true} />
        <Route path="/tasks" component={ExperimentsPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default AppRouter
// ────────────────────────────────────────────────────────────────────────┘