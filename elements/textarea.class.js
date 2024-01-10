class Textarea extends Elements{

    constructor(parent, id, className, placeholder) {
        super('textarea', id, className);
        // this.element.type = 'text';
        this.element.placeholder = placeholder;
        docID(parent).appendChild(this.element);
    }
}