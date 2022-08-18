import React,{useState} from "react";
import Data from './InventoryData.json';
import InventoryForm from "./AddInventory";
import InventoryList from "./InventoryList";
import {Link} from 'react-router-dom';


export default function Inventory(){

    const [inventoryList, setInventory] = useState(Data);

    const addInventory = (productInput, amountInput, unitInput)=>{
            let copy =[...inventoryList];
            copy = [...copy,{id: inventoryList.length +1,
            item: productInput,
            amount: amountInput,
            unit:unitInput 
        }];
        setInventory(copy);
    }
    const handleChange =(id) =>{
        console.log(id)
        let ID = parseInt(id);
        let mappedInventory = inventoryList.map(inv =>{
            return inv.id === ID ? {...inv, amount: inv.amount + 1}: {...inv};
        })
        setInventory(mappedInventory)
    }
  

    return(
        <div className="App">
      <header className="App-header">
            <InventoryList inventoryList={inventoryList}
            handleChange={handleChange}
            >

            </InventoryList>
            <InventoryForm addInventory={addInventory}></InventoryForm>
            <Link to="/">Til hoved Siden</Link>
        </header>
    </div>
    );
}