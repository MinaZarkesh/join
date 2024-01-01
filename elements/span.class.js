class Span extends Elements {

    constructor(parent, id, className, data) {
        super('span', id, className)
        this.element.textContent = data;
        docID(parent).appendChild(this.element);
    }
}