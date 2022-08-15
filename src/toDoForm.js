import React, { useState } from 'react';

const ToDoForm = ({addNew}) => {
    const [userInput, setUserInput] = useState('');
    
    const handleChange = (e)=>{
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNew(userInput);
        setUserInput('');

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="skriv nytt gjøremål"></input>
            <button> Legg til</button>
        </form>
    )
}

export default ToDoForm;