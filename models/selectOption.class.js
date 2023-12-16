class Selectoption {

    constructor(parent, selected, text) {
        docID(parent).innerHTML += /*html*/`<option ${selected}>${text}</option>`
    }
}