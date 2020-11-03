import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'

import {Route,Redirect} from 'react-router-dom'

export const Privateroute=({isauthenticated,component:Component,...rest})=>{
return   <Route {...rest} component={(props)=>(
    isauthenticated?(<div>
        <Header></Header>
        <Component {...props}/></div>):(<Redirect to="/"></Redirect>)
)}/>

}
const mapstatetoprops=(state)=>{
    return {

        isauthenticated:!!state.auth.uid
    }
}

export default connect(mapstatetoprops)(Privateroute)