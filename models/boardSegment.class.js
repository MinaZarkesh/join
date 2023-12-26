class BoardSegment extends World {

    container;
    con_id;
    con_class = 'board-segments';
    headline;
    headline_id = "";
    headline_class= "";
    headline_text;
    button;
    button_id = "";
    button_class = "";
    button_onclick;
    img;
    img_id = "";
    img_class ="";
    img_src = "../assets/img/+.png";

    constructor(parent, segment, headline) {
        super();
        this.con_id = `${segment}-con`;
        this.button_id = `${segment}-btn`
        this.headline_text = headline;
        this.container = new Div(parent, this.con_id, this.con_class);
        this.headline = new Span(this.con_id, this.headline_id, this.headline_class, this.headline_text);
        this.button = new Button(this.con_id, this.button_id, this.button_class, this.button_onclick);
        this.img = new Img(this.button_id, this.img_id, this.img_class, this.img_src);
    }
}