class UnsortedListElement {

    constructor(parent, subtask) {
        docID(parent).innerHTML += /*html*/`
            <li>${subtask}</li>
        `
    }
}