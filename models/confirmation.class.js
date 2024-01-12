class Confirmation extends Elements{

    id;
    div_id;
    span_id;
    img_id;
    img;
    constructor(parent, text, img ){
        super();
        // this.img_src = imgsrc;
        this.div_id = `confirmation-id-div`;
        this.span_id = `span-confirmation-id`;
        this.img_id = `img-confirmation-id`;
        this.img = img;
        new Div(parent, this.div_id, "confirmation confirmation-animation", text);
        this.addImg();
        docID(this.div_id).style.animationName = "confirmation";
    }

    addImg(){
        if(this.img){
            new Img(this.div_id, this.img_id, "", "../assets/img/board_menu.png");
        }
    }
}
