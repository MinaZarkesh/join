class UnsortedListElement extends World{

    input_id;
    li_id;
    div_id;
    img_1_id;
    img_1_src = "../assets/img/blue Pencil.png";
    img_2_id;
    img_2_src = "../assets/img/delete.png";
    constructor(parent, subtask, index) {
        super();
        this.input_id = `sub-list-${index}`;
        this.li_id =`list-${index}`;
        this.div_id = `${this.li_id}-con`;
        this.img_1_id = `${this.li_id}-img-1`;
        this.img_2_id = `${this.li_id}-img-2`;
        new ListElement(parent, this.li_id, "list");
        new Div(this.li_id, this.div_id , "list-element");
        new Input(this.div_id, this.input_id, "", "text",);
        new Img(this.div_id, this.img_1_id, "", this.img_1_src);
        new Img(this.div_id, this.img_2_id, "", this.img_2_src);
        docID(this.input_id).value = subtask;
        docID(this.img_1_id).onclick = function() {subtaskChange('${this.input_id}', index)}
        docID(this.img_2_id).onclick = function() {deleteSubtask(index)};
    }
}


        // this.content= /*html*/`
        //     <li id="${this.li_id}" class="list">
        //         <div class="list-element">
        //             <input id="${this.input_id}" type="text" value="${subtask}">
        //             <img src="../assets/img/blue Pencil.png" onclick="subtaskChange('${this.input_id}', ${index})">
        //             <img src="../assets/img/delete.png" onclick="deleteSubtask(${index})">
        //         </div>
        //     </li> 
        //         `  
        // this.render(parent, this.content);