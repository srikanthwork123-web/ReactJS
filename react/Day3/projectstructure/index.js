// import React from 'react'
// import ReactDOM from 'react-dom/client'

	let heading = React.createElement(
	'h1',{
		id:'bg-blue'
	},
	"This is React JS Demo"
	)
	
	let paragraph = React.createElement(
	'p',{},
	"This is Paragraph"
	)
	
	let wrapper = React.createElement(
	'div',{},
	[heading,paragraph]
	)
	let element = document.getElementById('root');
	let root = ReactDOM.createRoot(element);
	//ReactDOM.createRoot(document.getElementById('root'));
        root.render(wrapper);
		
