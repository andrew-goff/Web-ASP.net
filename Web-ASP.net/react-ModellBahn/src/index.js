import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import jss from 'jss';
//import preset from 'jss-preset-default';
import './index.css';
import './App.css';

jss.setup({
	insertionPoint: document.getElementById('insertion-point')
})

const styles = theme => ({
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
	
	thead: {
	  backgroundcolor: 'LightSkyBlue',
	  color: 'white',
	  fontweight: 'bold',
	  height: '3rem',
	  padding: 0,
	  textalign: 'left',
	  width: '100%'
	},

	title: {
		backgroundcolor: 'LightSkyBlue',
		color: 'white',
		fontweight: 'bold',
		height: '2.5rem',
		padding: 0,
		textalign: 'center',
		width: '100%'
	},
	
	paper: {
		bordercollapse: 'collapse',
		color: 'LightSkyBlue',
		borderbottom: '0.1rem solid LightSkyBlue',
		overflow: 'hidden',
		marginbottom: theme.spacing.unit,
		padding: theme.spacing.unit,
		tablelayout: 'fixed',
		textalign: 'left',
		verticalalign: 'middle',
		width: '100%'
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
});	

const sheet = jss.createStyleSheet(styles)

sheet.attach()

function App() {	
    return (
        <div id="insertion-point"> 
        	<div className="App">
        		<title className="header">
        			<h1 className="title">ModellBahn</h1>
        		</title>
        		<header className="header">
        			<h1 className="title">ModellBahn</h1>				
        		</header>
        		<Grid container spacing={8} direction="row"  justify="center" alignItems="center">
        			<h3 className="thead">Ref Data</h3>
        			<Grid item xs={4}>
        				<Paper className="paper">	
          				</Paper>
          			</Grid>
          			<h3 className="thead">Inventory</h3>
          			<Grid item xs={4}>
          				<Paper className="renderNav()" color="secondary">	
          				</Paper>
      				</Grid>
      			</Grid>
	        	<footer className="renderFooter(i)">
				</footer>
        	</div>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#App"));

class NavBar extends React.Component {	
	addNavBar(){
		const NavMenu = {
			BACK: 0,
			REF_DATA: 1,
			INVENTORY: 2,
			HOME: 3 
		};
		
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
		
		this.setState({
			addNavBar: addNavBar,
			NavMenu: NavMenu,
		});	
	};
	
	init() {
		const addNavBar = this.state.NavBar.slice();
		addNavBar(NavBar.HOME);
		this.setState({
			NavBar: NavBar,
		});	
	}
	
	renderNav(){
		return(		
			<NavBar>  			
					value={this.addNavBar(NavBar.HOME)} 
					onClick={() => this.addNavBar()}
			</NavBar>
		);
	}
};

class Footer extends React.Component {	
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
	
	renderFooter(i){
		return(
			<footer className="footer">
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
		<div className="Modellbahn"> 
			<style data-meta="sheet">
				<section className="Index-article">
					<article />
				</section>
				<div className="Index-info">
					<div>{/*Status*/}</div>
					<ol>{/*TODO*/}</ol>
				</div>
			</style>
    	</div>
		);
	}
}

ReactDOM.render(
	<Menu />,
	document.getElementById('root')
);
