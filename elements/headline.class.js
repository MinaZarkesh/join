class Headline extends Elements {

    constructor(html_tag, parent, id, className, textContent) {
        super(html_tag, id, className);
        this.element.textContent = textContent;
        docID(parent).appendChild(this.element);
    }
}