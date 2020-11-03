import React from 'react';
import Expenseform from './expenseform'

import {connect} from 'react-redux'
import {startaddexpense} from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
    <div className="content-container">
    <h1 className="page-header__title">Add expense</h1>
    </div>
    </div>

    <div className="content-container">
    <Expenseform 
    onSubmit={(expense)=>{
props.dispatch(startaddexpense(expense))
props.history.push('/')
    }}/>
    </div>
  </div>
);

export default connect()(AddExpensePage);
