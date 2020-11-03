import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'

import {Route,Redirect} from 'react-router-dom'

export const PublicRoute=({isauthenticated,component:Component,...rest})=>{
return   <Route {...rest} component={(props)=>(
    isauthenticated?((<Redirect to="/dashboard"></Redirect>)
        
        ):(<Component {...props}/>)
)}/>

}
const mapstatetoprops=(state)=>{
    return {

        isauthenticated:!!state.auth.uid
    }
}

export default connect(mapstatetoprops)(PublicRoute)