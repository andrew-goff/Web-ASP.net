function a() {
	return (
		<div id="insertion-point"> 
			<div className="App">
        		<Grid container spacing={8} direction="row"  justify="center" alignItems="center">
        			<Grid item xs={2}>
        				<Paper className="initMenu">Categories</Paper>
        			</Grid>
        			<Grid item xs={2}>
    					<Paper className="initMenu">Classes</Paper>
    				</Grid>
    				<Grid item xs={2}>
						<Paper className="initMenu">Construction</Paper>
					</Grid>
					<Grid item xs={2}>
						<Paper className="initMenu">Controls</Paper>
					</Grid>
					<Grid item xs={2}>
						<Paper className="initMenu">Countries</Paper>
					</Grid>
					<Grid item xs={2}>
						<Paper className="initMenu">Couplings</Paper>
					</Grid>
					<Grid item xs={2}>
						<Paper className="initMenu">Currencies</Paper>
					</Grid>
          			<Grid item xs={2}>
          				<Paper className="initMenu">Articles</Paper>
          			</Grid>
          			<Grid item xs={2}>
          				<Paper className="initMenu">Decoders</Paper>
          			</Grid>
          			<Grid item xs={2}>
          				<Paper className="initMenu">Prototypes</Paper>
          			</Grid>
          			<Grid item xs={2}>
          				<Paper className="initMenu">Trains</Paper>
          			</Grid>
      			</Grid>
      			
			</div>
        </div>
    );	
}

class initMenu extends a {
	rendernav(){
		const NavMenu = {
			BACK: 0,
			REF_DATA: 1,
			INVENTORY: 2,
			HOME: 3 
		};
	
		const addNavBar = this.state.NavMenu.slice();
		const ACHSFOLG_DROP = new Menu();
		addNavBar(NavBar.HOME);
		ACHSFOLG_DROP.init();
		this.setState({
			NavBar: NavBar,
		});
	}
	
	state = {
		anchorEl: null,
		open: false,
	};
	
	handleClick = (event) => {
		this.setState({open: true, anchorEl: event.currentTarget});
	};
	
	handleClickClose(){
		this.setState({open: false});
	};
	
	render(){
		return(
		<div>
			<Menu id="init" anchorEl={this.anchorEl} open={this.state.open} onRequestClose={this.handleClickClose()}>
				<MenuItem onClick={this.handleClickClose()}>Categories</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Classes</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Construction</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Controls</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Countries</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Couplings</MenuItem>
				<MenuItem onClick={this.handleClickClose()}>Currencies</MenuItem>
      			<MenuItem onClick={this.handleClickClose()}>Articles</MenuItem>
      			<MenuItem onClick={this.handleClickClose()}>Decoders</MenuItem>
      			<MenuItem onClick={this.handleClickClose()}>Products</MenuItem>
      			<MenuItem onClick={this.handleClickClose()}>Prototypes</MenuItem>
      			<MenuItem onClick={this.handleClickClose()}>Trains</MenuItem>
      		</Menu>	
      	</div>
      	);
	}	
	
}
export default(initMenu);