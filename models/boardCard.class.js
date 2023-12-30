class BoardCard extends World {

    task;
    container;
    container_id;
    container_class = "board-card";
    departments;
    departments_id;
    departments_class = "card-dept";
    departments_content;
    description;
    description_id;
    description_class = "card-desc";
    subtask;
    subtask_id;
    subtask_class = "card-subtask";
    associates;
    associates_id;
    associates_class = "card-associates";

    constructor(e) {
        super();
        this.container_id = e.container.replace("-con", "") + `-card-${e.id}`;
        this.departments_id= this.container_id + 'department-con';
        this.description_id = this.container_id + 'description-con';
        this.subtask_id = this.container_id + 'subtask-con';
        this.associates_id = this.container_id + 'assciates-con';
        // this.task = taskElement();
        this.container = new Div(e.container, this.container_id, this.container_class);
        this.departments = new Div(this.container_id, this.departments_id, this.departments_class, this.departments_content);
        this.depart(e, this.departments_id);
        this.description = new Div(this.container_id, this.description_id, this.description_class,);
        this.title(e, this.description_id)
        this.subtask = new Div(this.container_id, this.subtask_id, this.subtask_class);
        this.subtaskContent(this.subtask_id);
        this.associates = new Div(this.container_id, this.associates_id, this.associates_class);
        this.assosciates(this.associates_id, e)
    }

    depart(e, parent) {
        let color;
        let div_id;
        for (let i = 0; i < e.category.length; i++) {
            color = this.backgroundcolor(e.category[i]);
            div_id = `${parent}-${i}-div`      
            new Div(parent, div_id, "department-card");
            new Span(div_id,"","", e.category[i]);
            docID(div_id).style = `background-color: var(${color})`;
        }
    }

    backgroundcolor(department) {
        let color;
        categorys.forEach((e) => {
            if(e.name == department) {
                color = e.color;
            }
        });
        return color
    }

    title(e, parent) {
        new Span(parent, "", "card-title", e.title+ "<br>");
        new Span(parent, "", "card-desc", e.description);
    }
    subtaskContent(parent) {
        let progress_div = `${parent}-progress-con`;
        let progress_in_id = `${progress_div}-in`;
        new Div(parent, progress_div , "progress-con");
        new Div(progress_div , progress_in_id, "progress-in");
        docID(progress_in_id).style = `width: 50%`;
        new Span(parent, "","","1/2 Subtask")
    }

    assosciates(parent, e) {
    e.assignedToNameTag.forEach((element, index) => {
        let div_id = `${parent}-assiciate-${index}`;
        let span_id = `${div_id}-span`;
        new Div(parent, div_id, "profile-badge badge-board");
        new Span(div_id, span_id, element[index], element);
        docID(div_id).style = `background-color: var(${e.assignedToColor[index]})`;
    });

    // /*html*/ `
    // <div id='profile_badgeCon-${this.contact_idx}'  class="profile-badge" style="background-color: var(${this.contact_color});">
    //   <span id='contact_itemNameTag-${this.contact_idx}'>${this.contact_name_tag}</span>
    // </div>
    // `
    }
}