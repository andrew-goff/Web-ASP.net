import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import jss from 'jss';
import injectSheet, { ThemeProvider } from 'react-jss';
import logo from './logo.svg';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const styles = {
	html: {
		mstextsizeadjust: 'auto',
		mozboxsizing: 'border-box',
		webkitboxsizing: 'border-box',
		webkittextsizeadjust: 'auto',
		backgroundcolor: 'LightYellow',
		boxsizing: 'border-box',
		borderradius: '0.25em',
		display: 'block',
		fontfamily: 'Verdana, sans-serif',
		fontsize: '12px',
		lineheight: '0.15rem',
		overflow: 'hidden',
		padding: '0.5rem'
	},
		
	header: {
		backgroundcolor: 'inherit',
		height: 'auto',
		position: 'fixed',
		top: 0,
	},
	
	button: {
		 backgroundcolor: 'LightSkyBlue',
		 border: '0.1rem solid LightSkyBlue',
		 borderradius: '0.25em',
		 color: 'white',
		 fontsize: '1rem',
		 padding: '0.3rem 0.3rem'
	},
	
	body: {
		 border: 'transparent 0',
		 margin: 0,
		 opacity: 1,
		 overflow: 'hidden',
		 padding: '0 1rem 0 0',
		 width: '98%'
	},
	
	title: {
		
	},
	
	section: {
		
	},
	
	footer: {
		
	}
};	

const sheet = jss.createStyleSheet(sheet);

jss.setup({
	insertionPoint: document.getElementById('insertion-point')
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

class NavBar extends React.Component {
	addNavBar(){
		const NavBar = {
				BACK: 0,
				RETURN: 1,
				INVENTORY: 2,
				HOME: 3  
		}
		
		const addNavBar = (menuStyle) => {
			let header = document.getElementsByTagName('HEADER')[0];
			header.removeChildren(header);
			
			let nav = document.createElement(nav);
			header.appendChild(nav);
			
			if (menuStyle === NavBar.HOME) {
				header.addHeading(nav, 'h1', 'MODELLBAHN');
				header.addRule(nav);
			}
		}
		
		const NavMenu = {
		
		}
		
		
	}
	
	createFooter(){
		const navLink = (title, href, action, id) => {
			let li = document.getElementById('li');
			let a = document.getElementById('a');
			if (id) { 
				a.id = id;
			}
			
			a.className = 'nav-button';
			a.href = href;
			li.appendChild(a);
			return li;
		}
		
		const addFooter = () => {
			let div = document.getElementsByTagName('FOOTER')[0];
			div.removeChildren(div);
			
			let hr = document.createElement('hr');
			hr.className = "highlight";
			div.appendChild(hr);
			
			let ul = document.createElement('ul');
			ul.className = "footer";
			div.appendChild(ul);
			
			let li = document.createElement('li');
			div.addText(li, 'COPYRIGHT');
			div.appendChild(li);
			
			ul.appendChild(navLink('ABOUT', '#', div.about, 'license'));
		}
	}
	
	init() {
	//	addNavBar(NavBar.HOME);
	//	addFooter();
	}
	
	renderNavBar(){
		return(		
		<NavBar>  			
		value={this.const.addNavBar()} 
		onClick={() => this.init()}
		</NavBar>
		);
	}
	
	renderFooter(){
		return(
		<footer>
		value={this.const.addFooter()}
		</footer>
		);
	}
};



class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}
	
	handleClick(i){
		const squares = this.state.squares.slice();
		
		if (calculateWinner(squares) || squares[i]){
			return;
		}
		squares[i] = this.state.xIsNext? 'X' : 'O';
		
		this.setState({
			sqaures: squares, 
			xIsNext: !this.state.xIsNext,
		});
	}
	
	render(){
		const winner = calculateWinner(this.state.squares);
		let status;

		if (winner) {
			status = 'Winner:' + winner;
		}
	
		else {
			const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');	
		}
			
		return(
			  <div>
				<div className="status">{status}</div>
					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>
				<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
			);
		}
}

React.createElement(
	'div',
	{className: 'sidebar'},
	null
);

class Menu extends React.Component {
	render() {		
		return(
		<div className="Modellbahn" id="insertion-point">
			<title className="Index-header">
				<h1 className="title">ModellBahn</h1>
			</title>
			<body onload="renderNavBar()">
				<header className="Index-intro">
					<h1 className="title">ModellBahn</h1>				
				</header>
				<section className="Index-article">
					<article />
				</section>
				<div className="Index-info">
					<div>{/*Status*/}</div>
					<ol>{/*TODO*/}</ol>
				</div>
				<div onload="renderFooter()">
				</div>
    		</body>
		</div>
		);
	}
}

ReactDOM.render(
	<Menu />,
	document.getElementById('root')
);

function calculateWinner(squares){
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	
	for (let i = 0; i < lines.length; i++){
		const [a, b, c] = lines[i];
		
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a];
		}
	}
	
	return null;
}