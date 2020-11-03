import React,{useState} from 'react'
import {connect} from 'react-redux'
import {settextfilter,setsortbydate,setsortbyamount,setstartdate,setenddate} from '../actions/filters'

import {DateRangePicker} from 'react-dates'
import moment from 'moment'



const Expenselistfilter=(props)=>{

    const [calendarfocused,setstate]=useState(null)
    
    function ondatechange(newdate){
 
        props.dispatch(setstartdate(newdate.startDate))
        props.dispatch(setenddate(newdate.endDate))
    }
    function onfocuschange(calendarfocused){
setstate(calendarfocused)
    }

return <div className="content-container" >
    <div className="input-group">
    <div className="input-group__item">
    <input type='text' className="text-input" value={props.filter.text} placeholder="Search Expenses" onChange={(e)=>{
props.dispatch(settextfilter({text:e.target.value}))

}}></input>
    </div>
    <div className="input-group__item">
    <select value={props.filter.sortby} className="select" onChange={(e)=>{
if(e.target.value==='date'){
props.dispatch(setsortbydate())
}
else if(e.target.value==='amount'){
props.dispatch(setsortbyamount())
}
}}>
    <option value='amount'>AMOUNT</option>
    <option value='date' >DATE</option>
</select>
    </div>
    <div className="input-group__item">
    <DateRangePicker
startDate={props.filter.startdate}
endDate={props.filter.enddate}
onDatesChange={ondatechange}
focusedInput={calendarfocused}
onFocusChange={onfocuschange}
showClearDates={true}
numberOfMonths={1}
isOutsideRange={()=>{
    false
}}/>
    </div>



    </div>
</div>
}

const mapstatetoprops=(state)=>{
    return {
        filter:state.filter
        
        
    }
}

export default connect(mapstatetoprops)(Expenselistfilter)