import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses.js';
import { setTextFilter,sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const store = configureStore();


store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 4486797 }));
store.dispatch(addExpense({ description: 'Gas Bill'}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
store.dispatch(sortByAmount());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
