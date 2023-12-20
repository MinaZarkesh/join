class Requiered {

    constructor(parent) {
        docID(parent).innerHTML += /*html*/`
            <span id="${parent}-requiered" class="requiered font-label">    </span>
        `
    }
}