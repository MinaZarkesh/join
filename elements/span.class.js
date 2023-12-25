class Span extends World {

    constructor(parent, id, classname, data) {
        super()
        this.content = /*html*/`<span id="${id}" class="${classname}">${data}</span>`
        this.render(parent, this.content);
    }
}