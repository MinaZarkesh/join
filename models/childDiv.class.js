class Childdiv extends Labeldiv {

    constructor(parent, child, name, optional, id) {
        super(parent, child, name, optional)
        docID(child).innerHTML += /*html*/`
            <div id="${id}"></div>
        `
    }
}