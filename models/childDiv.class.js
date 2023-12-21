class Childdiv extends Labeldiv {

    content; // e stands for Element
    constructor(parent, child, name, optional, id) {
        super(parent, child, name, optional)
        this.content = `<div id="${id}"></div>`
        this.render(child, this.content);
    }
}