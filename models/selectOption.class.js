class Selectoption extends World {

    constructor(parent, selected, text) {
        super();
        this.content= `<option ${selected}>${text}</option>`
        this.render(parent, this.content);
    }
}