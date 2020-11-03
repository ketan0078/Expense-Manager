import React from 'react';
//import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import{startlogout} from '../actions/auth'

export const Header = ({startlogout}) => (
  <header class="header">
    {/* <h1>Expensify</h1> */}
    {/* <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink> */}
    {/* <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> */}
    <div className="content-container">
      <div className="header__content">
    <Link className="header__title" to="/dashboard" >
      <h1>Expensify</h1> 
    </Link> 
    {/* <Link to="/create" className="header__title">
      <h1>Create Expense</h1>
    </Link> */}
    
    <button className="buttonstyle buttonstyle_link" onClick={startlogout}>LOGOUT</button>
    </div>
    </div>
  </header>
);

const mapdispatchtoprops=(dispatch)=>{

  return{
    startlogout:()=>dispatch(startlogout())
  }
}

export default connect(undefined,mapdispatchtoprops)(Header);
