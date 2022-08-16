import ToDoList from './toDoList';
import React, {useState} from 'react';
import ToDoForm from './toDoForm';
import data from './todoData.json';
import {Link} from'react-router-dom';
import './App.css';

export default function TodoMain (){

    const [toDoList, setToDoList ] = useState(data);
 
    const handleToggle = (id) => {
      let ID = parseInt(id);
      let mapped = toDoList.map(task => {
        return task.id === ID ? { ...task, complete: !task.complete } : { ...task};
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
            <Link to="/">Til hoved Siden</Link>
 

      
       
      </header>
    </div>
  );
}