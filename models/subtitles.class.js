class Subtitles {

    constructor(parent, name, text) {
        docID(parent).innerHTML += /*html*/`
            <div id="${name}">
                <img src="../assets/img/Check button.png">
                <span>${text}</span>
            </div>
        `
    }
}