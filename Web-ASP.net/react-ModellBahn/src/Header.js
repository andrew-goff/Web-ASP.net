import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/core/Menu'

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
	
	Root: {
		backgroundcolor: '#2196f3',
		color: 'White',
		flexGrow: 1,
		borderbottom: '0.1rem solid LightSkyBlue',
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
	
	AppBar: {
		backgroundcolor: '#2196f3',
		color: 'White',
		flexGrow: 1,
		borderbottom: '0.1rem solid LightSkyBlue',
	},

	
	section: {
		backgroundcolor: 'inherit',
		height: 'auto',
		position: 'fixed',
		width: 'inherit',
	},
};	

function Header(props){
	const {classes} = props;
	return(
		<header>
			<div className={classes.Root}>
			<title className="header">
				<h1 className="title">ModellBahn</h1>
			</title>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h3" color="inherit" className={classes.Grow}>
							Ref Data
						</Typography>
						<nav>
							<ul>
							<Button><li><Link to='/'>Home</Link></li></Button>
							<Button><li><Link to='/categories'>Categories</Link></li></Button>
							<Button><li><Link to='/construction'>Construction</Link></li></Button>
							<Button><li><Link to='/classes'>Classes</Link></li></Button>
							<Button><li><Link to='/controls'>Controls</Link></li></Button>
							<Button><li><Link to='/couplings'>Couplings</Link></li></Button>
							<Button><li><Link to='/countries'>Countries</Link></li></Button>
							<Button><li><Link to='/currencies'>Currencies</Link></li></Button>
							<Button><li><Link to='/decodertypes'>Decoder Types</Link></li></Button>
							<Button><li><Link to='/drive'>Drive</Link></li></Button>
							<Button><li><Link to='/eras'>Eras</Link></li></Button>
							<Button><li><Link to='/gauges'>Gauges</Link></li></Button>
							<Button><li><Link to='/lights'>Lights</Link></li></Button>
							<Button><li><Link to='/manufactures'>Manufactures</Link></li></Button>
							<Button><li><Link to='/motortypes'>Motor Types</Link></li></Button>
							<Button><li><Link to='/protocols'>Protocols</Link></li></Button>
							<Button><li><Link to='/railways'>Railways</Link></li></Button>
							<Button><li><Link to='/scales'>Scales</Link></li></Button>
							<Button><li><Link to='/specialeditions'>Special Editions</Link></li></Button>
							<Button><li><Link to='/traintypes'>Train Types</Link></li></Button>
							</ul>
						</nav>
					</Toolbar>
				</AppBar>
			</div>
		</header>
	);
}
Header.propTypes = {
	classes: PropTypes.object.isRequired,	
};

export default withStyles(styles)(Header);

