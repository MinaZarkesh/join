class Divinput {

    constructor(parent, name, placeholder) {
        docID(parent).innerHTML += /*html*/`
            <div id="${name}">
                <input type="text" placeholder="${placeholder}">
            </div>
        `
    }
}