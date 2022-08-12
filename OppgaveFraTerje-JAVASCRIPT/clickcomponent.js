class ClickComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        //The Element.attachShadow() 
        //method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
        this.root = document.createElement('div');
        this.shadowRoot.appendChild(this.root);
        this.state = {
            count: 0,
            ppc: 1,
        };
        this.updateView();
    }

    updateView() {
        this.root.innerHTML = /*html*/ `
        <p>You clicked ${this.state.count} times</p>
        <p>Points Per click ${this.state.ppc} </p>
        <button> 
            Click me
        </button>  
        <button> 
            Upgrade
            </button>  
        `;
        let btn = this.root.getElementsByTagName('button')[0];

        btn.onclick = this.click.bind(this);
        let btn2 = this.root.getElementsByTagName('button')[1];
        btn2.onclick = this.upgrade.bind(this);
    }

    click() {
        this.state = { count: this.state.count + 1, ppc: this.state.ppc };
        this.updateView();
    }

    upgrade(){
        if(this.state.count >= 10){
            this.state = {...this.state, count: this.state.count -= 10, ppc: this.state.ppc+= 1 }
            this.updateView();
        }
       
    }
}

customElements.define('click-component', ClickComponent);