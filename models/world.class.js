class World {

    content;
    argument_array;
    data;
    html_element
    constructor() {
        
    }

    

    render(parent, html_element) {
        docID(parent).innerHTML += html_element;
         this.html_element = html_element;
    }


}