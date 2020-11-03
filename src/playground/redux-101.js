import { createStore } from 'redux';


const increment=({incrementby=1}={})=>{
  return {
type:'INCREMENT',
incrementby

  }
}
const decrement=({decrementby=1}={})=>{
return  {
type:'DECREMENT',
decrementby

}
}
const store = createStore((state = { count: 0 },action) => {
  switch(action.type){
    case 'INCREMENT':
      
      return {
        count:state.count+action.incrementby
      }
    case 'DECREMENT':
      
    return {
      count:state.count-action.decrementby
    }
    case 'RESET':
      return{
        count:0
      }  
  
  default:
    return state;
 
}});

const unsubscribe=store.subscribe(()=>{
  console.log(store.getState());
})



store.dispatch(increment({incrementby:7}))

store.dispatch(decrement({decrementby:6}))

unsubscribe()
store.dispatch({
  type:'RESET'
})

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
