import React from 'react';
import './App.css';
import {Link } from 'react-router-dom';



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
          <div>Forside</div>
        <Link to="/Click" >til klikkergame uten hooks</Link>
        <Link to="/Clicker" >til klikkergame med hooks</Link>
        <Link to="/toDoMain" >til todDoList</Link>

      </header>
    </div>
  );
}


export default App;
