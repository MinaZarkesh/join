class Divinput extends World {
    spanClass = `d-none`;
    div_input;

    constructor(parent, name, placeholder, id, cssClass, type) {
        super();
        let endtag = type == "textarea" ? "</textarea>" : "";
        let isclass = cssClass == ""? "" :`class='${cssClass}'`;
        this.div_input = `
            <div id="${name}">
                <${type} id="${id}" ${isclass} type="text" placeholder="${placeholder}">${endtag}
            </div>
        `
        this.render(parent, this.div_input)
    }

}