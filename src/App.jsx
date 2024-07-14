import React from 'react';
import './App';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to QTify</h1>
        <p>Your music streaming application.</p>
      </header>
    </div>
  );
}

export default App;
