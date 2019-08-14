import React from 'react';
import logo from './logo.svg';
import './App.css';

import FetchMe from './components/fetch-me';
import Names from './components/names';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FetchMe />
      <hr />
      <Names />
    </div>
  );
}

export default App;