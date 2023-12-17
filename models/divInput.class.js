class Divinput {
    spanClass = `d-none`;

    constructor(parent, name, placeholder, id, cssClass, type) {
        let endtag = type == "textarea" ? "</textarea>" : "";
        let isclass = cssClass == ""? "" :`class='${cssClass}'`;
        docID(parent).innerHTML += /*html*/`
            <div id="${name}">
                <${type} id="${id}" ${isclass} type="text" placeholder="${placeholder}">${endtag}
            </div>
        `
    }
}