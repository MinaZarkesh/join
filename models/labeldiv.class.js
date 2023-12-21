class Labeldiv extends World{
    additionaltext;
    
    constructor(parent, child, name, optional) {
        this.additionaltext = optional ? "(optional)" : "";
        this.content = `
            <div id="${child}">
                <span class="div-span"> ${name} ${this.additionaltext}</span>
            </div>
        `
        this.render(parent, this.content)
    }

    render(parent, html_element)  {
        docID(parent).innerHTML += html_element;
    }
}

