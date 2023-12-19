class Selectoption {

    constructor(parent, selected, text) {
        docID(parent).innerHTML += /*html*/`<option ${selected} style="background-image:url(../assets/img/low.png)">${text}</option>`
    }
}