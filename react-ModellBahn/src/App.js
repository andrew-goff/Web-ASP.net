import React, {Component} from 'react'
import Header from './Header'
import Main from './Main'
import './App.css'

class App extends Component {
	state = {
		Categories: []
	}
	
	componentDidMount() {
			fetch()
			.then(res => res.json())
			.then((data) => {
				this.setState({Categories: data })
			})	
			.catch(console.log)
	}
	
	render(){
		return (
			<div>
			<Header />
			<Main />
		
		</div>
		);
	}
}

export default App
