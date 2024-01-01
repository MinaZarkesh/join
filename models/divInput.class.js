class Divinput{
    spanClass = `d-none`;
    div_input;

    constructor(parent, name, placeholder, id, cssClass, type) {
        new Div(parent, name)
        type == "textarea" ? new Textarena(parent, id, cssClass, placeholder) : new Input(parent, id, cssClass, placeholder);

    }

}


