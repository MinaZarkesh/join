class Img extends Elements {

    constructor(parent, id, className, src) {
        super("img", id, className);
        this.element.src = src;
        docID(parent).appendChild(this.element);
    }
}