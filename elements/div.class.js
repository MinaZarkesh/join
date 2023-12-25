class Div extends World {

    constructor(parent, id, classname, data) {
        super()
        this.data = this.isdata(data);
        this.content = /*html*/`<div id="${id}" class="${classname}">${this.data}</div>`
        this.render(parent, this.content);
    }

    isdata(data) {
        if (data == "" || data == undefined) {
            return ""
        } else {
            return data
        }
    }
}