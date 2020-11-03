import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter';
import configstore from './store/configstore'
import {startsetexpense} from './actions/expenses'
import {login,logout} from './actions/auth'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase'
import LoadingPage from './components/LoadingPage';



const store=configstore()

const jsx=(
    <Provider store={store}><AppRouter /></Provider>

)
let hasrendered=false
const renderapp=()=>{
    if(!hasrendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasrendered=true
    }

}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startsetexpense()).then(()=>{
            renderapp()
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }

        })
    }
    else{
        store.dispatch(logout())
        history.push('/')
        renderapp()
    }

})
