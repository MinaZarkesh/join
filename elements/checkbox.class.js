class Checkbox extends Elements{

    constructor(parent, id, className) {
        super("input", id, className);
        this.element.type = 'checkbox';
        docID(parent).appendChild(this.element);
    }
}