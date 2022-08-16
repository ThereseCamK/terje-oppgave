import React from 'react';
import './App.css';
// import {Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';



function App() {
  // const [navigate, showClicker] = useState('/Click')
  const navigate = useNavigate();
  function showClick(){
    navigate('/Click')
  }
  function showClicker(){
    navigate('/Clicker')
  }
  function showToDo(){
    navigate('/toDoMain')
  }
 
  return (
    <div className="App">
      <header className="App-header">
          <div>Forside</div>
          <button onClick={showClick}>til klikker(uten hooks)</button>
          <button onClick={showClicker}>til klikker (med hooks)</button>
          <button onClick={showToDo}>til TODO</button>
          {/* <button onClick={() =>showClicker(navigate)}>Til Klikk(uten hooks)</button> */}
        {/* <Link to="/Click" >til klikkergame uten hooks</Link>
        <Link to="/Clicker" >til klikkergame med hooks</Link>
        <Link to="/toDoMain" >til todDoList</Link> */}


      </header>
    </div>
  );
}


export default App;
