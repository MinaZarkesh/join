class Input extends Elements{

    constructor(parent, id, className, placeholder) {
        super("input", id, className);
        this.element.type = 'text';
        this.element.placeholder = placeholder;
        docID(parent).appendChild(this.element);
    }
}