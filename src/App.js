import './App.css';
import {useReducer} from 'react'

const initialState={
  number:0
};

const reducerFn=(prevState,action)=>{
switch(action.type){
  case 'increase':
    return {number:prevState.number+action.payload};

    case 'decrease':
    return {number:prevState.number-1};
    default:
      return {number:prevState.number};
}
}



function App() {

const[state,dispatch]=useReducer(reducerFn,initialState)

  return (
    <div className="App">
<button onClick={()=>dispatch({type:'increase', payload:4})}>İncrease</button>
<button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>
<p>{state.number}</p>
    </div>
  );
}

export default App;
