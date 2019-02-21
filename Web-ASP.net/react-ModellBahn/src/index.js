import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function Square(props) {	 
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>			
	);
}

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
	
	renderSquare(i){
		return(
		<Square>  			
		value={this.state.squares[i]} 
		onClick={() => this.handleClick(i)}
		</Square>
		);
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

class Game extends React.Component {
	render() {		
		return(
		<div className="game">
			<header className="Home-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="Home-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<div className="game-board">
				<Board />
			</div>
			<div className="game-info">
				<div>{/*Status*/}</div>
				<ol>{/*TODO*/}</ol>
			</div>
			
			<footer>
    			<h2 className="URL-title">Links</h2>
    			<li><a class="btn btn-info btn-sm" href='App.js'>Index </a></li>,
    			<li><a class="btn btn-info btn-sm" href='NoughtCrosses.js'>Nought and Crosses game </a></li>
    		</footer>
		</div>
		);
	}
}

ReactDOM.render(
	<Game />,
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