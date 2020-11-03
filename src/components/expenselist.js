import React from 'react'
import {connect} from 'react-redux'
import Expenselisitems from './expenselistitem'
import selectexpenses from '../selectors/expenses'


const Expenselist=(props)=>(
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item__message">
                    <span>No Expenses</span>
                </div>
            ) : (
                props.expenses.map((expense)=>{
                    return <Expenselisitems key={expense.id} {...expense}></Expenselisitems>
           
                })
            )
        }
        </div>
     
        
    </div>

)
const mapstatetoprops=(state)=>{
    return {
        expenses:selectexpenses(state.expenses,state.filter)
        
    }
}
                                                                                                                            

export default connect(mapstatetoprops)(Expenselist) 