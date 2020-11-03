import React from 'react';
 import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
//import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';


import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';

import NotFoundPage from '../components/NotFoundPage';
;
import Loginpage from '../components/loginpage'
import {createBrowserHistory} from 'history'
import PrivateRoute from './privateroute'
import PublicRoute from './publicroute'

export const history=createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
    
      <Switch>
        <PublicRoute path="/" component={Loginpage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
     
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
