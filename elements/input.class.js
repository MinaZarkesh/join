class Input extends Elements{

    constructor(parent, id, className, type, placeholder) {
        super("input", id, className);
        this.element.type = type;
        this.element.placeholder = placeholder;
        docID(parent).appendChild(this.element);
    }
}