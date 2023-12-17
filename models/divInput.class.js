class Divinput {

    constructor(parent, name, placeholder, id, cssClass) {
        docID(parent).innerHTML += /*html*/`
            <div id="${name}">
                <input id="${id}" class="${cssClass}" type="text" placeholder="${placeholder}">
            </div>
        `
    }
}