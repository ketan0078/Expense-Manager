import {v4 as uuid} from 'uuid'
import database from '../firebase/firebase'
import expenses from '../reducers/expenses'
export const addexpense=(expense)=>{
    return {type:'ADDEXPENSE',
    expense
   }}
    

export const startaddexpense=(expensedata={})=>{
    return (dispatch,getstate)=>{
        const uid=getstate().auth.uid
    const {description='',note='', amount= 0, createdAt=0}=expensedata
        
    
    const expense={description,note,amount,createdAt}
    database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
        dispatch(addexpense({
            id:ref.key,
            ...expense
        }))
    })
    }
}

export const removeexpense=({id}={})=>{
    return {type:'REMOVEEXPENSE',
    id}
    }

export const startremoveexpense=({id}={})=>{
    return (dispatch,getstate)=>{
        const uid=getstate().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).remove().then((ref)=>{
            dispatch(removeexpense({id}))
        })
    }
}

export const editexpense=(id,updates)=>{
        return {type:'EDITEXPENSE',
        updates,
        id}
    }
export const starteditexpense=(id,updates)=>{
return (dispatch,getstate)=>{
    const uid=getstate().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then((ref)=>{
        dispatch(editexpense(id,updates))
    })
}

}

export const setexpenses=(expenses)=>{

    return{type:'SETEXPENSE',
    expenses}

}

export const startsetexpense=()=>{
    return (dispatch,getstate)=>{
        const uid=getstate().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
 const expenses=[]
 snapshot.forEach((childss)=>{
     expenses.push({
         id:childss.key,
         ...childss.val()
     })
 })
    dispatch(setexpenses(expenses))

        })

    }
}