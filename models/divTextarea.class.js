class Divtextarea extends Labeldiv {

    constructor(parent, name, optional) {
        super(parent, name, optional)
        docID(name).innerHTML += /*html*/`
            <textarea placeholder="Enter a Description"></textarea>
        `
    }
}