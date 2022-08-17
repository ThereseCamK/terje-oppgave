import React from "react";
import Inventory from './inventory';

const InventoryList =({inventoryList, handleChange, handleLessChange})=>{
    return(
        <div>
            {
                inventoryList.map(inve =>{
                    return(
                        <Inventory inve={inve}
                        handleChange={handleChange}
                        handleLessChange={handleLessChange}></Inventory>
                    )
                })
            }
        </div>
    )
}
export default InventoryList;