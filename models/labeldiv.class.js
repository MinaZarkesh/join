class Labeldiv {
    additionaltext;

    constructor(parent, child, name, optional) {
        this.additionaltext = optional ? "(optional)" : "";
        docID(parent).innerHTML += /*html*/`
            <div id="${child}">
                <span class="div-span"> ${name} ${this.additionaltext}</span>
            </div>
        `
    }
}