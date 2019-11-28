import React from 'react'
import HeaderBar from './HeaderBar'
import NavBar from './NavBar'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { Switch, Route } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
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
		
		AppBar: {
			backgroundcolor: '#2196f3',
			color: 'White',
			flexGrow: 1,
			borderbottom: '0.1rem solid LightSkyBlue',
		},
		
		body: {
			border: 'transparent 0',
			margin: 0,
			opacity: 1,
			overflow: 'hidden',
			padding: '0 1rem 0 0',
			width: '98%'
		},
			
		button: {
			backgroundcolor: 'LightSkyBlue',
			border: '0.1rem solid LightSkyBlue',
			borderradius: '0.25em',
			color: 'white',
			fontsize: '1rem',
			padding: '0.3rem 0.3rem'
		},
		
		paper: {
			bordercollapse: 'collapse',
			color: 'LightSkyBlue',
			borderbottom: '0.1rem solid LightSkyBlue',
			overflow: 'hidden',
			boxshadow: '0px 1px 4px 9px #2196f3',
			backgroundcolor: '#2196f3',
			//marginbottom: theme.spacing.unit,
			//padding: theme.spacing.unit,
			tablelayout: 'fixed',
			textalign: 'left',
			verticalalign: 'middle',
			width: '100%'
		},
		
		Root: {
			backgroundcolor: '#2196f3',
			color: 'White',
			flexGrow: 1,
			borderbottom: '0.1rem solid LightSkyBlue',
		},
		
		ToolBar: {
			backgroundcolor: 'LightSkyBlue',
			border: '0.1rem solid LightSkyBlue',
			borderradius: '0.25em',
			color: 'white',
			fontsize: '1rem',
			padding: '0.3rem 0.3rem'
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
		
		section: {
			backgroundcolor: 'inherit',
			height: 'auto',
			position: 'fixed',
			width: 'inherit',
		},
};	

const Gauges = () => (
	<div>
		<NavBar />
		<h1>Gauges</h1>
		<div className="header">
		<AppBar position="static">
			<Toolbar>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs>
						<Paper className={styles.paper}>Name</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={styles.paper}>Description</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={styles.paper}>+</Paper>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
		<Footer />
	  </div>
	</div>
)
	
export default withStyles(styles)(Gauges);