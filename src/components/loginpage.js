import React from 'react'
import {connect} from 'react-redux'
import {startlogin} from '../actions/auth'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Loginpage =({startlogin})=>{
    AOS.init();
    return <div className="box-layout" >
        <div class="box-layout__box" data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="linear">
            <h1 className="box-layout__title">Expensify$</h1>
            <p>want to have a track of your daily expenses!!We are here to help you!! </p>
            
            <button className="buttonstyle" onClick={startlogin}>LOGIN WITH GOOGLE</button>
    
        
        </div>
        
    </div>
}

const mapdispatchtoprops=(dispatch)=>({
    startlogin:()=>dispatch(startlogin())

})

export default connect(undefined,mapdispatchtoprops)(Loginpage)