import React from 'react'
function Button({clickHandler}) {

    console.log("Child Render");

    return (
        <button onClick={clickHandler}>
            Click Child Button
        </button>
    );
}


export default React.memo(Button);