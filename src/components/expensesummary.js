import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectexpenses from '../selectors/expenses'
import totalexpenses from '../selectors/selectexpensestotal'
import { Link } from "react-router-dom"

export const Expensesummary=({expensecount,expensetotal})=>{
const expenseword=expensecount===1?'expense':'expenses'
const formattedtotal=numeral(expensetotal).format('Rs0,00')
return <div className="page-header">
    <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expensecount}</span> {expenseword} totalling: <span>     Rs.{formattedtotal}</span></h1>
        <div className="page-header__actions">
            <Link className="buttonstyle" to="/create">Add Expense</Link>
        </div>
    
    </div> 
    
</div>


}
const mapstatetoprops=(state)=>{
    const visibleexpense=selectexpenses(state.expenses,state.filter)
    return {
        expensecount:visibleexpense.length,
        expensetotal:totalexpenses(visibleexpense)
    }

}

export default connect(mapstatetoprops)(Expensesummary)