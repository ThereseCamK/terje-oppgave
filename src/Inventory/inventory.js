import React from "react";

const Inventory =({inve, handleChange}) => {
    const visibilty = inve.amount === 0 ? 'disabled' :'';

    const handleAmount = change=> (e) =>{
        e.preventDefault()      
        handleChange(e.currentTarget.id, change)

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
           onClick={handleAmount(1)}>+</button>

           <button className="inventoryBTN" 
            disabled={visibilty} id={inve.id}  
            onClick={handleAmount(-1)}>-</button>
           <hr></hr>
        </div>
     
    )
}
export default Inventory;

// 