import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage' ;
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpenseComponent} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
