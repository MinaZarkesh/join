class BoardBigCard extends World {

    // container;
    // container_parent = "main-board";
    container_id = "main-bord-card";
    container_class = this.container_id;
    department;
    department_id = this.container_id + "-department";
    department_class = "card-dept";
    title;
    title_id = this.container_id + "-title";
    title_class;
    description;
    description_id = this.container_id + "-description";
    description_class;
    due_date;
    due_date_id = this.container_id + "-due-date";
    due_date_class;
    due_date_format;
    priority;
    priority_id = this.container_id + "-priority";
    priority_class;
    associates;
    associates_id = this.container_id + "-associates";
    associates_class;
    subtasks;
    subtasks_id = this.container_id + "-subtasks";
    subtasks_class;
    edit;
    edit_id = this.container_id + "-subtasks";
    edit_class;

    constructor(e, parent) {
        super();
        this.department = new Div(parent, this.department_id, this.department_class);
        this.depart(e, this.department_id);
        this.title = new Div(parent, this.title_id, this.title_class);
        new Span(this.title_id, "", "",e.title);
        this.description = new Div(parent, this.description_id, this.escription_class);
        new Span(this.description_id, "", "",e.description);
        this.due_date = new Div(parent, this.due_date_id, this.due_date_class);
        this.due_date_format = this.dueDateFormat(e.date);
        new Span(this.due_date_id, "", "", "Due Date:");
        new Span(this.due_date_id, "", "", this.due_date_format);
        this.priority = new Div(parent, this.priority_id, this.priority_class);
        new Span(this.priority_id, "", "", "Priortiy:");
        new Span(this.priority_id, "", "", e.priority);
        new Img(this.priority_id, "","", e.priorityImg);
        this.associates = new Div(parent, this.associates_id, this.associates_class);
        new Span(this.associates_id, "", "", "Assigned To:");
        this.associatesCard(e);
        this.subtasks = new Div(parent, this.subtasks_id, this.subtasks_class);
        // this.subtasksContent();
        this.edit = new Div(parent, this.edit_id, this.edit_class);
        this.editContent()
    }

    dueDateFormat(olddate) {
        let date_part = olddate.split('-');
        let new_date =date_part[2] + '.' + date_part[1] + '.' + date_part[0];
        return new_date
    }

    associatesCard(element) {
        element.assignedTo.forEach((e, index) => {
            let container_id = `big-associates-${index}`
            let div_id = `${container_id}-div`
            new Div(this.associates_id, container_id)
            new Div(container_id, div_id, "profile-badge");
            new Span(div_id, "", "", element.assignedToNameTag[index]);
            new Span(container_id, "", "", e)
        });
    }

    subtasksContent () {
        new Span(this.subtasks_id, "", "", "Subtasks");
    }

    editContent() {
        let div_id_1 = `${this.edit_id}-1`;
        let div_id_2 = `${this.edit_id}-2`;;
        new Div(this.edit_id, div_id_1);
        new Img(div_id_1, "","","../assets/img/delete.png");
        new Span(div_id_1, "","","Delete");
        new Div(this.edit_id, div_id_2);
        new Img(div_id_2, "","","../assets/img/edit.png");
        new Span(div_id_2, "","","Edit");
    }


    
}