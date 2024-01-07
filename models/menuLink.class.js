class MenuLink{
    name;
    anchor_id;
    anchor_class = "nav-link font-body";
    anchor_href;
    img;
    img_id;
    img_src;
    constructor(id) {
        // super();
        this.classname = "active";
        this.name = id.charAt(0).toUpperCase() + id.slice(1);
        this.name = this.name.replace("_t", " T");
        this.anchor_id = `${id}-link`;
        this.anchor_href = `${id}.html`;
        this.img_id = `${this.anchor_id}-img`
        this.img_src = `../assets/img/${id}_menu.png`;
        
        new Anchor('navbar', this.anchor_id, this.anchor_class, this.anchor_href);
        this.img = new Img(this.anchor_id, this.img_id, undefined, this.img_src);
        new Span(this.anchor_id, "", "", this.name);
        docID(this.img_id).alt = id;
    }
}

