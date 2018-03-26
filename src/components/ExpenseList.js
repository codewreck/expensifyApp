import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h2>Expense List</h2>
    {props.expenses.map((expense) => (<p key={expense.id}>{expense.description}</p>))}
  </div>
);

// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);
//
// export default ConnectedExpenseList;

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
