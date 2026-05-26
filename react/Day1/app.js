
let heading = React.createElement(
	'h1',{
		id:'bg-blue'
	},
	"This is React JS Demo"
	)
	
let paragraph = React.createElement(
	'p',{ className:'para',id:'fontvalue'},
	"This is Paragraph"
	)
	
let wrapper = React.createElement(
	'div',{id:'bg-yellow'},
	[heading,paragraph]
	)

let element = document.getElementById('root');
let root = ReactDOM.createRoot(element);
root.render(wrapper);

