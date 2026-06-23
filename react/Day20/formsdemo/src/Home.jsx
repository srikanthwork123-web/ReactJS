import React from 'react'
import { useNavigate,Link,createSearchParams } from 'react-router-dom';

function Home(){
    
let id=101;
let name="Koteswar";  
let title="QueryParam"
let price=2000

const navigate = useNavigate();

const func1 = ()=>{
alert("Performing some logic");
// Navigate programmatically
navigate("/about");
};

const navigateHandler=(title,price)=>{
navigate({pathname:"/queryparams",search:`?${createSearchParams({title,price})}`});
}

    return(
<>
<h1> This is Home Component</h1>

<h2>Programmatic Navigation</h2>
<button onClick={func1} className="btn btn-primary w-20">About</button>
<h1>Navigate Back / Forward</h1>
<button onClick={()=>navigate(-1)} className="btn btn-primary w-20">Go Back</button>
<br/>
<button onClick={()=>navigate(1)} className="btn btn-danger w-20">Go Next</button>

<h1>Path Params</h1>

<Link to="/">Go To Home</Link><br/>
<Link to={`/about/${id}`}>Go To About</Link><br/>
<Link to={`/contactus/${id}/${name}`}>Go To Contact</Link>

<h1>Query Params</h1>
<button className="btn btn-danger w-50" onClick={() => navigateHandler(title, price)}>QueryParams</button>
</>
    );
}
export default Home