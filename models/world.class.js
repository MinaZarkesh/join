class World {

    content;

    constructor() {

    }

    render(parent, html_element) {
        docID(parent).innerHTML += html_element;
    }
}