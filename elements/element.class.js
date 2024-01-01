class Elements extends World {

    element;
    constructor(html_tag, id, className) {
        super();
        this.element = document.createElement(html_tag);
        this.element.id =  id;
        this.element.className = className;
    }
}
