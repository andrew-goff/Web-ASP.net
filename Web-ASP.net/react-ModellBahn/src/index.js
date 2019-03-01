import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';
import './index.css';
import App from './App';


jss.setup(preset());

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
	
	table: {
		 bordercollapse: 'collapse',
		 borderbottom: '0.1rem solid LightSkyBlue',
		 overflow: 'hidden',
		 padding: 0,
		 tablelayout: 'fixed',
		 textalign: 'left',
		 verticalalign: 'middle',
		 width: '100%'
	},
	
	section: {
	  backgroundcolor: 'inherit',
	  height: 'auto',
	  position: 'fixed',
	  width: 'inherit',

	},
	
	footer: {
	  backgroundcolor: 'LightSkyBlue',
	  color: 'white',
	  fontweight: 'bold',
	  height: '2.5rem',
	  padding: 0,
	  textalign: 'center',
	  width: '100%'
	}
};	

const sheet = jss.createStyleSheet(styles);

jss.setup({
	insertionPoint: document.getElementById('insertion-point')
});

sheet.attach();

ReactDOM.render(<App />, document.getElementById('root'));

function initialise(navmenu){
	return(		
	<NavBar className="" onClick={navmenu.OnClick(NavBar.HOME)}> 
		{navmenu.value}
	</NavBar>
	);
}


class NavBar extends React.Component {
	constructor(navmenu) {
		super(navmenu);
		this.state = {
			BACK: 0,
			REF_DATA: 1,
			INVENTORY: 2,
			HOME: 3 
		}
	}

	addNavBar(){
		const addNavBar = (menuStyle) => {
			let header = document.getElementsByTagName('HEADER')[0];
			header.removeChildren(header);
			
			let nav = document.createElement('nav');
			header.appendChild(nav);
			
			if (menuStyle === NavBar.HOME) {
				header.addHeading(nav, 'h1', 'MODELLBAHN');
				header.addRule(nav);
			}
			return header;
		}
		
		const NavMenu = {
			BACK: 0,
			REF_DATA: 1,
			INVENTORY: 2,
			HOME: 3 
		}
		
		//addNavBar = this.state.NavMenu? '0' : '1' ; '2' ; '3';
		
		this.setState({
			addNavBar: addNavBar,
			NavMenu: NavMenu,
		});
	}
	
	addFooter(i){
		const navLink = (title, href, action, id) => {
			let li = document.getElementById('li');
			let a = document.getElementById('a');
			if (id) { 
				a.id = id;
			}
			
			a.className = 'nav-button';
			a.href = href;
			if (action) { 
				a.addEventListener('click', action); 
			}
			a.addText(a, title);
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
		
		//addFooter = this.state.addFooter (div, hr, ul, navLink);
		
		this.setState({
			navLink: navLink,
			addFooter: this.state.addFooter,
		});
		
		
	}
	
	init() {
	//	addNavBar(NavBar.HOME);

		const NavBar = this.state.NavBar.slice();

		this.setState({
			NavBar: NavBar,
		});
	}
	
	renderNavBar(i){
		return(		
			<NavBar>  			
			value={this.addNavBar(NavBar.HOME)} 
			onClick={() => this.addNavBar(i)}
			</NavBar>
		);
	};
	
	renderFooter(i){
		return(
			<footer>
			value={this.state.addFooter()}
			onClick={() => this.addFooter(i)}
			</footer>
		);
	}
};

React.createElement(
	'div',
	{className: 'sidebar'},
	null
);


class Menu extends React.Component {
	render() {		
		return(
		<body>
			<div id="insertion-point">
				<div className="Modellbahn"> 
					<title className="Index-header">
						<h1 className="title">ModellBahn</h1>
					</title>
					<div className="renderNavBar(i)">
					</div>
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
					<div id="renderFooter(i)">
					</div>
				</div>
    		</div>
		</body>
		);
	}
}

ReactDOM.render(
	<Menu />,
	document.getElementById('root')
);
