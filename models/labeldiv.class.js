class Labeldiv {
    additionaltext;

    constructor(parent, name, optional) {
        this.additionaltext = optional ? "(optional)" : "";
        docID(parent).innerHTML += /*html*/`
            <div id="${name}">
                <span class="div-span"> ${name} ${this.additionaltext}</span>
                <!-- <textarea placeholder="Enter a Description"></textarea> //muss in einer unterklasse definiert werden.-->
            </div>
        `
    }
}