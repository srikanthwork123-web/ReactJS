import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(){
    console.log(email + ' '+ password)
  }
  return (
    <>
    <div className="border w-25 mt-5 m-auto p-3">
        <h2 className="text-danger text-center">Login Form</h2>

        <div className="mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="mt-3">
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
      
    </>
  )
}



export default App
