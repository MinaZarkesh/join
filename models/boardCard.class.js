class BoardCard extends World {

    container;
    container_id;
    container_class = "board-card";
    departments;
    departments_id;
    departments_class = "card-dept";
    description;
    description_id;
    description_class = "card-desc";
    subtask;
    subtask_id;
    subtask_class = "card-subtask";
    associates;
    associates_id;
    associates_class = "card-associates";

    constructor(parent, id) {
        super();
        this.container_id = parent.replace("-con", "") + `-card-${id}`;
        this.departments_id= this.container_id + 'department-con';
        this.description_id = this.container_id + 'description-con';
        this.subtask_id = this.container_id + 'subtask-con';
        this.associates_id = this.container_id + 'assciates-con';
        this.container = new Div(parent, this.container_id, this.container_class);
        this.departments = new Div(this.container_id, this.departments_id, this.departments_class, "Departments");
        this.description = new Div(this.container_id, this.description_id, this.description_class, "Titel <br> description");
        this.subtask = new Div(this.container_id, this.subtask_id, this.subtask_class, "Subtask");
        this.associates = new Div(this.container_id, this.associates_id, this.associates_class, "Associates" );
    }
}