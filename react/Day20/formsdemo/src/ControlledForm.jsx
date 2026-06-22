import {useState} from 'react'

function ControlledForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleSubmit(){
    const newErrors = { email: "", password: "" };

    if (email.trim() === "") {
      newErrors.email = "Enter email address";
    } else if (!emailpattern.test(email)) {
      newErrors.email = "Enter valid email address";
    }

    if (password.trim() === "") {
      newErrors.password = "Enter password";
    } else if (password.trim().length < 10) {
      newErrors.password = "Password is minimum 10 characters";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log(email +''+password);
    }
  }
  return (
    <>
     <h2 className='text-center'>ControlledForm in react</h2>
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
          {errors.email&& (<span className="text-danger">{errors.email}</span>)}
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
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
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

export default ControlledForm