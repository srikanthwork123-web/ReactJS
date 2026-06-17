import {useState} from 'react'

function ChildParent(props) {

const [name, setName] = useState("");

const employee={

 id:101,
 name:"Koteswar",
 role:"Developer"

};
const sendToParentVal = () => {
    props.sendData(name,true);
};

const sendToParentObj = () => {
    props.sendData(employee,false);
};


return (

<div>

<h2>
Child Component
</h2>

<input

type="text"

value={name}

onChange={(e)=>
    setName(e.target.value)
}

/>


<button
onClick={sendToParentVal}
>
Send To Parent
</button>
<button
onClick={sendToParentObj}
>
Send To Parent
</button>



</div>

);

}

export default ChildParent