import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

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
			//marginbottom: theme.spacing.unit,
			//padding: theme.spacing.unit,
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

};	

const Home = () => (
	<div>
		<h1 className="title">ModellBahn</h1>
		<NavBar />
		<Footer />
	</div>
)

export default Home
