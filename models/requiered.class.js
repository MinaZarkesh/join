class Requiered {

    constructor(parent, text, id) {
        docID(parent).innerHTML += /*html*/`
            <span id=${id} class="requiered d-none">${text}</span>
        `
    }
}