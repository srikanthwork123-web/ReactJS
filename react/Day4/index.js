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
     console.log(wrapper)
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(wrapper);
   
   // name="react application demo"
    // let name="react application demo"
    // let root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(name)

    // let name="react application demo"
    // let root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<ul><li>HOME</li><li>About</li></ul>)


