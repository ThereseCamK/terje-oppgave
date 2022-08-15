import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './App.css';



function Clicker(){
    const [count, setCount] = useState(0);
    const [ppc, setppcCount] = useState(1);
    return (
        <div className="App">
           <header className="App-header">
            <Link to="/">Til hoved Siden</Link>
          <p>Du har klikket {count} ganger</p>
          <p>points pr click {ppc} </p>
          <button onClick={() => setCount(count + ppc)}>
           klikk
          </button>
          <button onClick={() => setppcCount(ppc + 1)}>
           oppgrader
          </button>
          </header>
        </div>
      );
}

export default Clicker;