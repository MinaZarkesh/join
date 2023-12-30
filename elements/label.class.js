class Label extends World {

    constructor(parent, name, text) {
        super()
        this.labelID = `label${name}`;
        this.content = /*html*/`<label id=${this.labelID} for=${name}> ${text}</label>`;

        this.render(parent, this.content);
    }
}