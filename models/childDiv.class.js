class Childdiv extends Labeldiv {

    div_e; // e stands for Element
    constructor(parent, child, name, optional, id) {
        super(parent, child, name, optional)
        this.div_e = `<div id="${id}"></div>`
        this.render(child, this.div_e);
    }
}