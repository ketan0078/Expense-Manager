import moment from 'moment'

const filterreducerstate={
    text:'',
    sortby:'date',
    startdate:moment().startOf('month'),
    enddate:moment().endOf('month')
    
    }
export default (state=filterreducerstate,action)=>{
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

