import React from 'react';
import './App.css';
import Hello from './components/hello.js';
import Menu from './components/Menu.js';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      <Hello />
      <Menu />
      <Social />
    </div>
  );
}

export default App;
