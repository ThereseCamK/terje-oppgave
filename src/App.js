import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import data from './todoData.json';
import './App.css';
import Clicker from './clickerHooks';
import Click from './clicker';
// import ToDoList from './toDoList';
// import ToDoForm from './toDoForm';
// import ToDoMain from './TodoMain';
import {Link } from 'react-router-dom';



function App() {
 
  //toDoList må hete det samme som det gjør i toDoList.js (const ToDoList = ({toDoList}) => {)
  // const [toDoList, setToDoList ] = useState(data);
 
  //   const handleToggle = (id) => {
  //     let mapped = toDoList.map(task => {
  //       return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  //     });
  //     setToDoList(mapped);
  //   }

  //   const handleFilter = () => {
  //     let filtered = toDoList.filter(task=> {
  //       return !task.complete;
  //     });
  //     setToDoList(filtered);
  //   }

  //   const addNew = (userInput) => {
  //     let copy = [...toDoList];
  //     copy = [...copy, {id: toDoList.length +1, task: userInput, complete: false}];
  //     setToDoList(copy)
  //   }
  
  
 
  return (
    <div className="App">
      <header className="App-header">
      {/* <ToDoList toDoList={toDoList} 
          handleToggle={handleToggle} 
          handleFilter={handleFilter}
          />
          <ToDoForm addNew={addNew}></ToDoForm> */}
          <div>Forside</div>
        {/* <Routes>
            <Route path="/Clicker" element={<Clicker />}>Til klikkerGame med hooks</Route>
            <Route path="/Click" element={<Click />}>Til Klikker Game uten hooks</Route>
            <Route path="/toDoMain" element={<ToDoMain />}>Til Todo</Route>
        </Routes> */}

        <Link to="/Click" >til klikkergame uten hooks</Link>
        <Link to="/Clicker" >til klikkergame med hooks</Link>
        <Link to="/toDoMain" >til todDoList</Link>
 

      
       
      </header>
    </div>
  );
}


export default App;
