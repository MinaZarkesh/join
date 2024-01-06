class Anchor extends Elements {

    constructor(parent, id, className, href, textContent) {
        super('a', id, className);
        this.element.href = href;
        this.element.textContent = textContent;
        docID(parent).appendChild(this.element);
    }
}