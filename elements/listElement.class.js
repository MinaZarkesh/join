class ListElement extends Elements {

    constructor(parent, id, className) {
        super('li', id, className);
        docID(parent).appendChild(this.element);
    }
}