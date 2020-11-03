import React,{useState} from 'react'
import moment from 'moment'

import {SingleDatePicker,DatePicker} from 'react-dates'
import "react-dates/lib/css/_datepicker.css"




const Expenseform=(props)=>{
    const [state ,setstate] = useState({
        description:props.expense?props.expense.description:'',
        note:props.expense?props.expense.note:'',
        amount:props.expense?props.expense.amount.toString():'',
        createdAt:props.expense?moment(props.expense.createdAt):moment(),
        calendarfocused:false,
        error:''
    })
    // const [timestate,settimestate]=useState({
    //     createdAt:moment(),
    //     calendarfocused:false
    // })
    // const [note,setnote]=useState("")
    // const [amount,setamount]=useState(" ")

    function handlechange(e){
        
        const {name,value}=e.target
        setstate((prev)=>{
        
            return {...prev,[name]:value}
        })
        // if(v==='description'){
        //     setstate({description:n})
        // }
        // else if(v==='note'){
        //      setstate({note:n})
        // }
        // else if(v==='amount'){
        //     setstate({amount:n})
        // }    
    }
    function ondatechange(createdAt){
        if(createdAt){
        setstate((prev)=>{return {...prev,createdAt:createdAt}})}


    }
    function onFocusChange({focused}){
        setstate((prev)=>{return{...prev,calendarfocused:focused}})

    }
    function onSubmit(e){
    e.preventDefault()
    if(!state.amount||!state.createdAt){
setstate({error:'please provide amount and description!!!'})
    }
    else{
setstate({error:''})
props.onSubmit({
    description:state.description,
    amount:parseFloat(state.amount,10),
    createdAt:state.createdAt.valueOf(),
    note:state.note
})
    }

    }
    
//     function handlechange2(e){
// const note=e.target.value
// return setnote(note)
//     }
//     function handlechange3(e){
//     const amount=e.target.value
// //     if(amount.match(/^\d*(\.\d{0,2})?$/)){
// // return setamount(amount)
// //     }

// return setamount(amount)
//     }

    return <div>
         
        <form className="form" onSubmit={onSubmit}>
{state.error  && <p className="form__error"> {state.error}</p>}
            <input type='text' 
            name="description"
            placeholder='Enter description of your Expense'
            className="text-input"
            autoFocus
            onChange={handlechange}
            value={state.description}></input>
            <input type='number'
            name="amount"
            placeholder="Enter amount of your Expense"
            className="text-input"
            onChange={handlechange}
            value={state.amount}
            ></input>
            <SingleDatePicker 
            date={state.createdAt}
            onDateChange={ondatechange}
            focused={state.calendarfocused}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>{
            false
            }}
            />
            {/* <DatePicker
            selected={state.createdAt} 
            //onSelect={}
            onChange={onDateChange}></DatePicker> */}
            <textarea
            name="note"
            className="textarea"
            placeholder='Add Note for your Expense(optional)'
            onChange={handlechange}
            value={state.note}
            ></textarea>
            <div>
            <button className="buttonstyle">SAVE EXPENSE</button>
            </div>
        </form>
    </div>
}
export default Expenseform