import React, {Component} from 'react'
import Header from './Header'
import Couplings from './Couplings'
import Main from './Main'
import './App.css'

class App extends Component {
	state = {
		//Categories: []
		couplings: []
	}
	
	componentDidMount() {
			fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then((data) => {
				//this.setState({Categories: data })
				this.setState({couplings: data})
			})	
			.catch(console.log)
	}
	
	render(){
		return (
			<div>
			<Header />			
			<Main />
			<Couplings couplings={this.state.couplings} />
		</div>
		);
	}
}

export default App
