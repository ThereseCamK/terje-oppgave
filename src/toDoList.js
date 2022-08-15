import React from "react";
import ToDo from './todo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo=> {
                return(
                    <ToDo todo={todo}
                     handleToggle={handleToggle} 
                     handleFilter={handleFilter}/>
                )
            })}
            <button 
            onClick={handleFilter}> 
            slett alle som er gjort!</button>
        </div>   
    )
}
export default ToDoList;