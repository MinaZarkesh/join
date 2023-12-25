class Img extends World {

    constructor(parent, id, classname, src) {
        super()
        this.content = /*html*/`<img id="${id}" class="${classname}" src="${src}">`
        this.render(parent, this.content);
    }
}