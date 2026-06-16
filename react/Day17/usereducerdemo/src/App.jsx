import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useCounter from './counter.jsx'
import {useFetch} from './fetch'
import { basicReducer,loginReducer,cartReducer } from './reducer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CustomHookCounter/>
     <CustomHookUsers/>
     <ReducerHookCounter/>
     <ReducerHookLogin/>
     <ReducerHookCart/>
    </>
  )
}
function CustomHookCounter() {

 const {count,increment,decrement} = useCounter(0);

 return (
    <div>
      <h1>Coustom counter by using useCounter hook</h1>
        <h2>
          Count : {count}
        </h2>
        <button onClick={increment}>
          +
        </button>
        <button onClick={decrement}>
          -
        </button>
    </div>
 );

}

function CustomHookUsers(){
const {
   data,
   loading
} = useFetch(
 "https://jsonplaceholder.typicode.com/users"
);
if(loading){
    return <h2>Loading...</h2>
}
return(
 <>
 <h1>Custome Hook with API of Users example</h1>
   {
     data.map(user=>
        <h3 key={user.id}>
          {user.name} - {user.email} - {user.phone}
        </h3>
     )
   }
 </>
);
}

function ReducerHookCounter() {

const initialState = {
    count: 0
};
const [state, dispatch] = useReducer(
    basicReducer,
    initialState
);
return (
    <div>
       <h1>Reducer Hook with Counter example</h1>
        <h2>Count : {state.count}</h2>
        <button onClick={() =>dispatch({type:"INCREMENT"})}>
          +
        </button>
        <button onClick={() =>dispatch({type:"DECREMENT"})}>
          -
        </button>
    </div>
);

}

      function ReducerHookLogin(){
        const initialState = {
          username:"",
          password:"",
          isLoggedIn:false
        };
          const [state,dispatch] =
          useReducer(
          loginReducer,
          initialState
          );

          return(
          <div>
          <h1>Reducer Hook with Login example</h1>
          <input
          type="text"
          placeholder="Enter Username"
          value={state.username}
          onChange={(e)=>
          dispatch({
          type:"SET_USERNAME",
          payload:e.target.value
          })
          }
          />

          <input
          type="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={(e)=>
          dispatch({
          type:"SET_PASSWORD",
          payload:e.target.value
          })
          }
          />
          <button
          onClick={()=>
          dispatch({
          type:"LOGIN"
          })
          }
          >
          Login
          </button>

          {
          state.isLoggedIn
          ?
          <h2>Welcome User</h2>
          :
          <h2>Please Login</h2>
          }
          </div>
          );

      }

function ReducerHookCart(){
        const initialState = {
          cart:[]};

            const [state,dispatch] =
            useReducer(
            cartReducer,
            initialState
            );



            const products=[
            {
            id:101,
            name:"Laptop"
            },
            {
            id:102,
            name:"Mobile"
            },
            {
            id:103,
            name:"Tablet"
            }
            ];


            return(

            <div>
            <h1>Reducer Hook with Card example</h1>
            {
            products.map(product=>(
            <button
            key={product.id}
            onClick={()=>
            dispatch({
            type:"ADD_PRODUCT",
            payload:product
            })
            }

            >
            Add Product -{product.id}
            </button>
            ))
            }


            {
            state.cart.map(item=>

            <p key={item.id}>
            {item.name}

            </p>

            )

            }


            </div>

            );

}
export default App



