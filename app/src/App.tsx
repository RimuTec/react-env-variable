import React from 'react';
import logo from './logo.svg';
import './App.css';
import { API_ENDPOINT } from './config';

const w: any = window;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {API_ENDPOINT} 1122 hrs
        </p>
        <p>Env variable from docker image at compile time: {API_ENDPOINT} 1122 hrs</p>
        <p>Env variable from docker image at runtime: {w?._env_?.API_URL} 1133 hrs</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
