import React, {useState} from 'react';
import data from './todoData.json';
import './App.css';
// import Clicker from './clickerHooks';
import ToDoList from './toDoList';
import ToDoForm from './toDoForm';


function App() {
  //toDoList må hete det samme som det gjør i toDoList.js (const ToDoList = ({toDoList}) => {)
  const [toDoList, setToDoList ] = useState(data);
 
    const handleToggle = (id) => {
      let mapped = toDoList.map(task => {
        return task.id == id ? { ...task, complete: !task.complete } : { ...task};
      });
      setToDoList(mapped);
    }

    const handleFilter = () => {
      let filtered = toDoList.filter(task=> {
        return !task.complete;
      });
      setToDoList(filtered);
    }

    const addNew = (userInput) => {
      let copy = [...toDoList];
      copy = [...copy, {id: toDoList.length +1, task: userInput, complete: false}];
      setToDoList(copy)
    }
  
  
 
  return (
    <div className="App">
      <header className="App-header">


       <ToDoList toDoList={toDoList} 
       handleToggle={handleToggle} 
       handleFilter={handleFilter}
       />
       <ToDoForm addNew={addNew}></ToDoForm>

      
       
      </header>
    </div>
  );
}


export default App;
