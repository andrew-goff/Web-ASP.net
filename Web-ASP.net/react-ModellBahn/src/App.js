import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function app() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <footer>
        	<h2 className="URL-title">Links</h2>
        	<li><a class="btn btn-info btn-sm" href='index.js'>Index </a></li>,
        	<li><a class="btn btn-info btn-sm" href='NoughtCrosses.js'>Nought and Crosses game </a></li>
        </footer>
      </div>
    );
}

export default App;
