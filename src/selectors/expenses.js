import moment from 'moment'

export default (expenses,{text,startdate,enddate,sortby})=>{
    return expenses.filter((expense)=>{
        const createdatmoment=moment(expense.createdAt)
        const startdatetracker=startdate?startdate.isSameOrBefore(createdatmoment,'day'):true
        // typeof startdate!=='number'||expense.createdAt>=startdate
        const enddatetracker=enddate?enddate.isSameOrAfter(createdatmoment,'day'):true
        //typeof enddate!=='number'||expense.createdAt<=enddate
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
    