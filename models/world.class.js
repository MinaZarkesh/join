class World {

    content;
    argument_array;
    data;

    constructor() {
        
    }

    

    render(parent, html_element) {
        docID(parent).innerHTML += html_element;
    }


}