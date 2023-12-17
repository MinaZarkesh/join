class Divtextarea extends Labeldiv {

    constructor(parent, child, name, optional) {
        super(parent, child,  name, optional)
        docID(child).innerHTML += /*html*/`
            <textarea placeholder="Enter a Description"></textarea>
        `
    }
}