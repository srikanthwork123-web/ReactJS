import {useState,useRef} from 'react'

function UncontrolledForm() {
    let emailRef = useRef('')
    let passwordRef = useRef('')
    const [errors,setErrors] = useState({});

  const validateForm = () => {
   let validationErrors = {};
    // Read DOM values
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Email validation
    if(email.trim() === ""){
      validationErrors.email ="Email is required";
    }
    else if(!email.includes("@")){
      validationErrors.email ="Invalid email format";
    }

    // Password validation
    if(password.trim() === ""){
      validationErrors.password ="Password is required";
    }
    else if(password.length < 6){
      validationErrors.password ="Password must contain minimum 6 characters";
    }
    return validationErrors;
    };

    const submitHandler = (e) => {
    e.preventDefault();
    const errors =validateForm();
    if(Object.keys(errors).length > 0){
    setErrors(errors);
    }
    else{
      console.log("Form Submitted");
      console.log({
      email:emailRef.current.value,
      password:
      passwordRef.current.value
      });
      setErrors({});
    }
    };
    return (
         <>
         <h2 className='text-center'>UncontrolledForm in react</h2>
          <div className="border w-25 mt-5 m-auto p-3">
           <h2 className="text-danger text-center">Login Form</h2>
       
           <form onSubmit={submitHandler}>
        Email:
        <input name="email" type="email"  className={`form-control ${errors.email ? 'is-invalid' : ''}`} ref={emailRef} />
         <p className='text-danger'>{errors.email}</p>
        Password:
        <input name="password" type="password"  className={`form-control ${errors.password ? 'is-invalid' : ''}`} ref={passwordRef} />
        <p className='text-danger'>{errors.password}</p>
        <button className="btn btn-primary w-100">submit</button>
          </form>
      </div>
      </>
    );
}

export default UncontrolledForm