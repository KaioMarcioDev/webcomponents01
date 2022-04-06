class MyComp extends HTMLElement{

    constructor(){
        super()

        this.shadow = this.attachShadow({mode: 'open'})

    }

    connectedCallback(){
        const template = `
        <style>
            :host{
                background:#333333;
                display:block;
                color:${this.getAttribute("cor") || "white"};
            }
        </style>
        <slot>
        <h1>Hello</h1>
        </slot>
        `
        this.shadow.innerHTML = template
    }
    
}
customElements.define('my-element',MyComp)
