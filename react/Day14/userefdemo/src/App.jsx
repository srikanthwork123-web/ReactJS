import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  return (
    <>
      <Userefexample/>
      <Userefautofocusexample/>
      <UserefCountRenderExample/>
      <UserefStorePreValueExample/>
    </>
  )
}

function Userefexample() {
  const inputRef = useRef(10);

  const showValue = () => {
    console.dir(inputRef);
    inputRef.current.innerHTML="Show Value";
   // alert(inputRef.current.value);
  };

  return (
    <>
    <h1 ref={inputRef}>useRef with access of DOM element example</h1>
      <input
        type="text"
      />

      <button onClick={showValue}>
        Show Value
      </button>
    </>
  );
}

function Userefautofocusexample() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <> <h1>useRef with auto focus example</h1>
    <input
      type="text"
      ref={inputRef}
    />
    </>
  );
}

function UserefCountRenderExample(){
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <>
      <h1>useRef with Count Render example</h1>
      <h2>Count: {count}</h2>

      <h2>
        Render Count:
        {renderCount.current}
      </h2>

      <button
        onClick={() =>{
          setCount(count + 1);
          console.log(renderCount);
          console.log(renderCount.current);
        }
        }
      >
        Increment
      </button>
    </>
  );
}


function UserefStorePreValueExample(){
  const [count, setCount] =useState(0);
  const [timer, setTimer] =useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  },[count]);

  return (
    <>
    <h1>useRef with Store Previous value example</h1>
      <h2>
        Current: {count}
      </h2>
      <h2>
        Timer: {timer}
      </h2>

      <h2>
        Previous:
        {prevCount.current}
      </h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Count Increment
      </button>
      <button
        onClick={() =>
          setTimer(timer + 1)
        }
      >
       Timer Increment
      </button>
    </>
  );
}
export default App
