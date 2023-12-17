class Divdate extends Labeldiv {

    constructor(parent, child, name, optional) {
        super(parent, child, name, optional)
        docID(child).innerHTML += /*html*/`
            <input type="date" name="" id="">
        `
    }
}