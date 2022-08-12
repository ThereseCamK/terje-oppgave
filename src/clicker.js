import React from "react";

class Clicker extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            count: 0,
            ppc: 1,
        };
        this.count = this.count.bind(this);
        this.upgrade = this.upgrade.bind(this);
    }

    count(){
        
        this.setState({...this.state, count: this.state.count + this.state.ppc, ppc: this.state.ppc });
       
    }
    upgrade(){
        this.setState({...this.state, count: this.state.count - 10, ppc: this.state.ppc + 1})
    }

    render(){
        const count = this.state.count;
        const points = this.state.ppc;

        return (
            <div>
                <p> du har klikket {count} ganger</p>
                <p> antall poeng pr klikk {points}</p>
                <button onClick={this.count}>klikk</button>
                <button onClick={this.upgrade}>oppgrader</button>
            </div>
        )
    }
}

export default Clicker;