import React from 'react';
import Expenselist from './expenselist'
import Expenselistfilter from './expenselistfilter'
import Expensesummary from './expensesummary'
const ExpenseDashboardPage = () => (
  <div>
    <Expensesummary/>
    <Expenselistfilter/>
    <Expenselist/>
  </div>
);

export default ExpenseDashboardPage;
