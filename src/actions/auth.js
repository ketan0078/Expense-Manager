import {firebase,googleauthprovider} from '../firebase/firebase'



export const login=(uid)=>({
    type:'LOGIN',
    uid
})

export const startlogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleauthprovider)
    }
}

export const logout=()=>({
    type:'LOGOUT'
})

export const startlogout=()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}


