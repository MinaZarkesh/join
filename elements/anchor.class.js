class Anchor extends Elements {

    constructor(parent, id, className, href) {
        super('a', id, className);
        this.element.href = href;
        docID(parent).appendChild(this.element);
    }
}