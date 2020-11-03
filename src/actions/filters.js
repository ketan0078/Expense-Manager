export const settextfilter=({text=""}={})=>{
    return {type:'SETTEXTFILTER',
    text}
    }
    
export const setsortbyamount=()=>{
        return {
            type:'SORTBYAMOUNT',
        
        }
    }
export const setsortbydate=()=>{
        return {
            type:'SORTBYDATE',
        
        }
    }
    
export const setstartdate=(date)=>{
        return {
            type:'SETSTARTDATE',
            date
        }
    }
    
export const setenddate=(date)=>{
        return {
            type:'SETENDDATE',
            date
        }
    }
    