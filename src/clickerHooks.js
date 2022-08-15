import React, {useState} from "react";
import {Link} from 'react-router-dom';


function Clicker(){
    const [count, setCount] = useState(0);
    const [ppc, setppcCount] = useState(1);
    return (
        <div>
            <Link to="/">Til hoved Siden</Link>
          <p>Du har klikket {count} ganger</p>
          <p>points pr click {ppc} </p>
          <button onClick={() => setCount(count + ppc)}>
           klikk
          </button>
          <button onClick={() => setppcCount(ppc + 1)}>
           oppgrader
          </button>
        </div>
      );
}

export default Clicker;