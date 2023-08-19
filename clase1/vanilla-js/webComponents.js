let counter = 0

class MyButton extends HTMLElement {

    constructor(){
        super()
        this.counter = +this.getAttribute('counter') ?? 0
    }

    connectedCallback(){
        this.innerHTML = `<button>Web component ${this.counter}</button> `;
        this.button = this.querySelector("button");
        this.button.addEventListener("click", () => {
            this.counter = this.counter + 1
            this.button.innerHTML =  `Web component ${this.counter}`
        });
    }
}


window.customElements.define('my-button', MyButton)