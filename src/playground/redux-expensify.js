import {createStore,combineReducers} from 'redux'
import {v4 as uuid} from 'uuid'


//EXPENSEFUNCTION
const addexpense=({description='',note='', amount= 0, createdAt=0}={})=>{
return {type:'ADDEXPENSE',
expense:{
    id:uuid(),
    description,note, amount, createdAt
}}}

const removeexpense=({id}={})=>{
return {type:'REMOVEEXPENSE',
id}
}

const editexpense=(id,{updates})=>{
    return {type:'EDITEXPENSE',
    updates,
    id}
}

//FILTEREXPENSE
const settextfilter=({text=""}={})=>{
return {type:'SETTEXTFILTER',
text}
}

const setsortbyamount=()=>{
    return {
        type:'SORTBYAMOUNT',
    
    }
}
const setsortbydate=()=>{
    return {
        type:'SORTBYDATE',
    
    }
}

const setstartdate=(date)=>{
    return {
        type:'SETSTARTDATE',
        date
    }
}

const setenddate=(date)=>{
    return {
        type:'SETENDDATE',
        date
    }
}

const expensereducerstate=[]
const filterreducerstate={
    text:'',
    sortby:'date',
    startdate:undefined,
    enddate:undefined
    
    }


const expensereducer=(state=expensereducerstate,action)=>{
    switch(action.type){
        case 'ADDEXPENSE':
            return [...state,action.expense]
        case 'REMOVEEXPENSE':
            return state.filter(({id})=>{
            return id !==action.id
            })
        case 'EDITEXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
               
                }
                else{
                    return expense
                }
                
            }) 
            
        default:
            return state
    }
}
const filterreducer=(state=filterreducerstate,action)=>{
     switch(action.type){
        case 'SETTEXTFILTER':
            return {...state,
                text:action.text}
        case 'SORTBYAMOUNT':
            return {
                ...state,
                sortby:'amount'
            }        
            case 'SORTBYDATE':
                return {
                    ...state,
                    sortby:'date'
                }  
        case 'SETSTARTDATE':
            return {
                ...state,
                startdate:action.date
            }             
            case 'SETENDDATE':
                return {
                    ...state,
                    enddate:action.date
                }             
         default:
             return state
     }

}


const getvisibleexpenses=(expenses,{text,startdate,enddate,sortby})=>{
return expenses.filter((expense)=>{
    const startdatetracker=typeof startdate!=='number'||expense.createdAt>=startdate
    const enddatetracker=typeof enddate!=='number'||expense.createdAt<=enddate
    const textmatch=expense.description.toLowerCase().includes(text.toLowerCase())
    return startdatetracker&&enddatetracker&&textmatch

}).sort((a,b)=>{
    if(sortby==='date'){
        return a.createdAt<b.createdAt?1:-1
    }
    else if (sortby==='amount'){
        return a.amount<b.amount?1:-1
    }


})
}

const store=createStore(
    combineReducers({
        expenses:expensereducer,
        filter:filterreducer
    })
)
store.subscribe(()=>{
    const state=store.getState()
    const visibleexpenses=getvisibleexpenses(state.expenses,state.filter)
    console.log(visibleexpenses)

    // console.log(store.getState())
})

const exp1=store.dispatch(addexpense({description:'wow',amount:90,createdAt:165}))
const exp2=store.dispatch(addexpense({description:'now',amount:100,createdAt:166}))

// store.dispatch(removeexpense({id:exp1.expense.id}))

// store.dispatch(settextfilter({text:'wo'}))

// store.dispatch(settextfilter({text:'no'}))



store.dispatch(setsortbyamount())
store.dispatch(setsortbydate())

// store.dispatch(setstartdate(125))
//  store.dispatch(setenddate(150))

// store.dispatch(editexpense(exp2.expense.id,{updates:{amount:400,note:'plan successful!'}}))

