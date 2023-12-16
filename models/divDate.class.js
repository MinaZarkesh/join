class Divdate extends Labeldiv {

    constructor(parent, name, optional) {
        super(parent, name, optional)
        docID(name).innerHTML += /*html*/`
            <input type="date" name="" id="">
        `
    }
}