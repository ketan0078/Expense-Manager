import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import expensereducer from '../reducers/expenses'
import filterreducer from '../reducers/filters'
import authreducer from '../reducers/auth'


const composeenhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose


export default ()=>{const store=createStore(
    combineReducers({
        expenses:expensereducer,
        filter:filterreducer,
        auth:authreducer
    }),
    composeenhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
return store

}

