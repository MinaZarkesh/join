class Divinputimg{

    constructor(parent, id, type, placeholder, imgsrc) {
        docID(parent).innerHTML += /*html*/`
            <div id="${id}">
                <input type="${type}" class="form-control" placeholder="${placeholder}">
                <img src="${imgsrc}">
            </div>
        `
    }
}
