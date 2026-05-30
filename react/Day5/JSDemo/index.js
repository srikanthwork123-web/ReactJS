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
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(wrapper);