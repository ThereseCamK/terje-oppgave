import React,{useState} from "react";

const InventoryForm =({addInventory}) => {
    const [productInput, setProductInput] = useState('');
    const [productAmount, setAmoutInput] = useState();
    const [productUnit, setUnitInput] = useState('');

    const handleNewProduct =(e)=>{
        setProductInput(e.currentTarget.value);
    }
    const handleNewAmount = (e)=>{
        setAmoutInput(e.currentTarget.value);
    }
    const handleNewUnit =(e)=>{
        setUnitInput(e.currentTarget.value);
    }

    const handleSubmit =(e)=>{
        console.log(productInput, productAmount, productUnit)
        e.preventDefault();
        addInventory(productInput, productAmount, productUnit);
        setProductInput();
        setAmoutInput();
        setUnitInput();

    }


    return(
        <form onSubmit={handleSubmit}>
            <input
             value={productInput} 
             type="text" 
             placeholder="produkt" 
            onChange={handleNewProduct}>

            </input>

            <input
            value={productAmount} 
            type="number" 
            placeholder="amount" 
           onChange={handleNewAmount}
            ></input>
            <input
            value={productUnit} 
            type="text" 
            placeholder="unit" 
           onChange={handleNewUnit}
            ></input>
            <button className="addInventoryBTN" > Legg Til </button>
        </form>
    )
}

export default InventoryForm;