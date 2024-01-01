class Labeldiv{
    additionaltext;

    constructor(parent, child, name, optional) {
        this.additionaltext = optional ? "(optional)" : "";
        new Div(parent, child)
        new Span(child, undefined, "div-span", name + this.additionaltext)
    }
}
