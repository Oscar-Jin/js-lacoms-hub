// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";


import FavoritesPage from '../page/FavoritesPage';
import ExperimentsPage from '../page/ExperimentsPage';
import TasksPage from '../page/TasksPage';
import NotFoundPage from '../page/404Page';
import ShoutoutsEditPage from '../page/ShoutoutsEditPage';
import MorningAssemblyPage from '../page/MorningAssemblyPage';

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FavoritesPage} exact={true} />
        <Route path="/experiments" component={ExperimentsPage} exact={true} />
        <Route path="/experiments/morning-assembly" component={MorningAssemblyPage} />
        <Route path="/tasks" component={TasksPage} exact={true} />
        <Route path="/shoutouts" component={ShoutoutsEditPage} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default AppRouter
// ────────────────────────────────────────────────────────────────────────┘