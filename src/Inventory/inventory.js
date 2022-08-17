import React from "react";

const Inventory =({inve, handleChange, handleLessChange}) => {
    const visibilty = inve.amount === 0 ? 'disabled' :'';

    const handleAmount = (e) =>{
        e.preventDefault()      
        handleChange(e.currentTarget.id)

    }
    const handleLessAmount = (e) =>{
        e.preventDefault()
        handleLessChange(e.currentTarget.id)

    }
    return(
        <div className={inve.amount === 0 ? 'inventory hide': 'inventory'}id={inve.id}
        key={inve.id + inve.item}
        name="inventory"
      >
           produkt: {inve.item} <br></br>
           antall: {inve.amount}{ }{inve.unit} <br></br>
           <button className="inventoryBTN" 
           id={inve.id}  
           onClick={handleAmount}>+</button>

           <button className="inventoryBTN" 
            disabled={visibilty} id={inve.id}  
            onClick={handleLessAmount}>-</button>
           <hr></hr>
        </div>
     
    )
}
export default Inventory;

// 