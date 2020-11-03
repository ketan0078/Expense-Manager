import React from 'react';
import {connect} from 'react-redux'
import { starteditexpense,startremoveexpense } from '../actions/expenses';
import Expenseform from './expenseform'


const EditExpensePage = (props) => {
  
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">
              Edit Expense
          </h1>
        </div>
      </div>



      <div className="content-container">

      <Expenseform 
      expense={props.expense}
      onSubmit={(expense)=>{
        props.dispatch(starteditexpense(props.expense.id,expense))
        props.history.push('/')
      }}/>
      <button className="buttonstyle button--secondary"  onClick={()=>{
props.dispatch(startremoveexpense({id:props.expense.id}))
props.history.push('/')
}}>REMOVE EXPENSE</button>
</div>
    </div>
  );
};
const mapstatetoprops=(state,props)=>{

return{
  expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
}

}
export default connect(mapstatetoprops)(EditExpensePage);
