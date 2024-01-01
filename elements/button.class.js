class Button extends Elements {

    constructor_array;
    constructor(parent, id, className, onclick, data) {
        super("button", id, className);
        this.element.onclick = onclick;
        this.element.textContent = data;
        docID(parent).appendChild(this.element);
    }
}


   