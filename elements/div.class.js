class Div extends Elements {

    constructor(parent, id, className, data) {
        super('div', id, className)
        this.element.textContent = data == undefined ? "" : data;
        docID(parent).appendChild(this.element);
        
    }
}