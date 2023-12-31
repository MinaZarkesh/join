class ProfilBagde extends World {
    container;
    container_id;
    container_class = "profile-badge";
    span_id;
    span_class = "";


    constructor(parent, index, color, text) {
        super()
        this.container_id = `profile_badgeCon-${index}`;
        this.span_id = `contact_itemNameTag-${index}`
        new Div(parent, this.container_id, this.container_class);
        docID(this.container_id).style = `background-color: var(${color})`;
        new Span(this.container_id, this.span_id, this.span_class, text);
    }
}

{/* <div id='profile_badgeCon-${this.contact_idx}'  class="profile-badge" style="background-color: var(${this.contact_color});">
<span id=''>${this.contact_name_tag}</span>
</div> */}