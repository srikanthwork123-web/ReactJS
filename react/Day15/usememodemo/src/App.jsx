import { useEffect,useState,useMemo,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import usersData from './data.js'
import Button from './CallBack.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WithOutUsememoexample/>
      <Usememoexample/>
      <FindingLargeSumExample/>
      <FindingLargeSumWithUseMemoExample/>
      <FilerDataWithUseMemoExample/>
      <FilerLargeDataWithUseMemoExample/>
      <CallBackBasicExmple/>
      <UseCallBackWithBasicExample/>
      <ParentChildCallBack/>
      <CallBackWithAPIUsers/>
    </>
  )
}

function WithOutUsememoexample() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = (num) => {

    console.log("Calculating...without useMemo");

    for (let i = 0; i < 1000; i++) {console.log("Calculating...with forloop");}

    return num * 2;
  };

  const result = expensiveCalculation(count);

  return (
    <>
    <h1>Expensive Calculation Without useMemo</h1>
      <h2>Result: {result}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />
    </>
  );
}


function Usememoexample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

  const result = useMemo(() => {

    console.log("Calculating... with useMemo");

    for (let i = 0; i < 1000; i++) {console.log("Calculating...with forloop");}

    return count * 2;

  }, [count]);

  return (
    <>
    <h1>Expensive Calculation useMemo</h1>
      <h2>Result: {result}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />
    </>
  );
}

function FindingLargeSumExample(){
  const [num, setNum] = useState(0);

  const total = () => {

    console.log("Calculating total");

    let sum = 0;
 //change to 10000 when you are running application
    for(let i=1; i<=10; i++) { 
      console.log("Calculating Sum value"); 
      sum += i;
    }

    return sum;
  };

  return (
    <>
    <h1>Finding Large Sum Calculation Example</h1>
      <h2>{total()}</h2>

      <button
        onClick={() => setNum(num + 1)}
      >
        Re-render
      </button>
    </>
  );
}

function FindingLargeSumWithUseMemoExample(){
  const [num, setNum] = useState(0);
  const total = useMemo(() => {

    console.log("Calculating total");

    let sum = 0;
 //change to 10000 when you are running application
    for(let i=1; i<=10; i++) {
      console.log("Calculating Sum value"); 
      sum += i;
    }
    return sum;
    }, []);

  return (
    <>
    <h1>Finding Large Sum Calculation Example</h1>
      <h2>{total}</h2>

      <button
        onClick={() => setNum(num + 1)}
      >
        Re-render
      </button>
    </>
  );
}

function FilerDataWithUseMemoExample() {

    const [Time, setTime] = useState(new Date().toLocaleTimeString());

    const [products, setProducts] = useState(
        [
            { id: 1, name: 'One Plus Nord CE2', price: 20000 },
            { id: 2, name: 'Oppo F21 S', price: 22000 },
            { id: 3, name: 'Samsung Galaxy  M 33', price: 17000 },
        ]
    )


    const [searchText, updateSearchText] = useState('');

    const filteredProducts = useMemo(

        () => {

            console.log(products)

            return products.filter(
                (p) => {

                    return p.name.toLowerCase().includes(searchText.toLowerCase())

                }
            )

        },
        [products, searchText]

    )


    useEffect(
        () => {
            setInterval(
                () => {
                    setTime(new Date().toLocaleTimeString())

                }, 1000
            )

        }, []
    )

    return (
        <>
            <h1>Filtering Data With useMemo</h1>
            <div>{Time}</div>

            <input type="text" value={searchText} onChange={e => updateSearchText(e.target.value)} />

            <table>
              <thead>
                <tr>
                    <td> S.No</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                {
                    filteredProducts.map(
                        p => (
                            <tr key={p.id}>
                                <td> {p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>

                        )
                    )
                }
                </tbody>
            </table>
        </>
    );

}
function FilerLargeDataWithUseMemoExample() {

    const [Time, setTime] = useState(new Date().toLocaleTimeString());

    const [users, setUsers] = useState(usersData)

    const [searchText, updateSearchText] = useState('');

    const filteredUers = useMemo(

        () => {

            console.log(users)

            return users.filter(
                (p) => {

                    return p.name.toLowerCase().includes(searchText.toLowerCase())

                }
            )

        },
        [users, searchText]

    )


    useEffect(
        () => {
            setInterval(
                () => {
                    setTime(new Date().toLocaleTimeString())

                }, 1000
            )

        }, []
    )

    return (
        <>
            <h1>Filtering Data With useMemo</h1>
            <div>{Time}</div>

            <input type="text" value={searchText} onChange={e => updateSearchText(e.target.value)} />

            <table>
              <thead>
                <tr>
                    <td> S.No</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>phone</td>
                </tr>
                </thead>
                <tbody>
                {
                    filteredUers.map(
                        p => (
                            <tr key={p.id}>
                                <td> {p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.username}</td>
                                <td>{p.email}</td>
                                <td>{p.phone}</td>
                            </tr>

                        )
                    )
                }
                </tbody>
            </table>
        </>
    )

}

function CallBackBasicExmple(){
   const handleClick = () => {
    console.log("Clicked");
  };

  return (
   <>
   <h1> Call Back Basic Exmple</h1>
    <button onClick={handleClick}>
      Click
    </button>
    </>
  );

}

function UseCallBackWithBasicExample(){
  const handleClick = useCallback(() => {

      console.log("Button Clicked");

  }, []);


  return (

    <>
    <h1> Call Back with useCallback basic example</h1>
    <button onClick={handleClick}>
       Click
    </button>
    </>
  );

}

function ParentChildCallBack(){

      const [count,setCount] = useState(0);

      const handleClick = useCallback(() => {

      console.log("Clicked");

      },[]);

      return(
      <>
      <h1> Parent child components use call back hook</h1>
      <h2>
        Count : {count}
      </h2>
      <button
        onClick={()=>setCount(count+1)}
      >
        Increment
      </button>
      <Button clickHandler={handleClick}/>

      </>
      )

}

function CallBackWithAPIUsers(){

      const [users,setUsers]=useState([]);

      const getUsers = useCallback(()=>{
      fetch(
      "https://jsonplaceholder.typicode.com/users"
      )
      .then(res=>res.json())
      .then(data=>setUsers(data));
      },[]);

      return(
      <>
      <h1>Use Callback hook using API call</h1>
        <button onClick={getUsers}>
            Load Users
        </button>

      {
        users.map(user=>
          <p key={user.id}>
            {user.name} - {user.email}  - {user.phone}
          </p>
        )
      }

      </>
      )

}

export default App
