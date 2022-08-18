import React from "react";
import Inventory from './inventory';

const InventoryList =({inventoryList, handleChange})=>{
    return(
        <div>
            {
                inventoryList.map(inve =>{
                    return(
                        <Inventory inve={inve}
                        handleChange={handleChange}
                        ></Inventory>
                    )
                })
            }
        </div>
    )
}
export default InventoryList;