// ────────────────────────────────────────────────────────── import 📥 ───┐
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FavoritesPage from '../page/FavoritesPage';
import ExperimentsPage from '../page/ExperimentsPage';
import TasksPage from '../page/TasksPage';
import NotFoundPage from '../page/404Page';
import MorningAssemblyPage from '../page/MorningAssemblyPage';

// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FavoritesPage} exact={true} />
        <Route path="/experiments" component={ExperimentsPage} exact={true} />
        <Route path="/experiments/morning-assembly" component={MorningAssemblyPage} exact={true} />
        <Route path="/tasks" component={TasksPage} exact={true} />

        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default AppRouter
// ────────────────────────────────────────────────────────────────────────┘