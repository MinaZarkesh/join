class Label extends Elements {

    constructor(parent, name, text) {
        super('label', `label${name}`, undefined)
        this.element.for = name;
        this.element.textContent = text;;
        docID(parent).appendChild(this.element);
    }
}