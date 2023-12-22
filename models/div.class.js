class Div extends World {

    constructor(parent, id, classname) {
        super()
        this.content = /*html*/`<div id="${id}" class="${classname}"></div>`
        this.render(parent, this.content);
    }
}