class Urgencybtn{

    constructor(parent, btnName) {
        docID(parent).innerHTML += /*html*/`
            <button>${btnName}</button>
        `
    }
}