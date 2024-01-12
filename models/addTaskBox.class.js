class AddTaskBox {


    constructor(parent, headline) {
        new Div(parent, "addtaskCon");  //Haupt-div
        headline ? this.headline():"";
        this.content()
        this.endButton();
    }

    headline(headline) {
        new Div("addtaskCon", 'taskHeadline'); //Headline-div
        new Headline('h1','taskHeadline',"","", "Add Task"); //The headline
    }

    content() {
        new Div("addtaskCon", "content-con"); //Content Haupt-Div
        this.bigCon();
        this.bottomCon();
    }

    bigCon() {
        new Div("content-con", "contentbig"); //Container für Title/Discreption /Due Date
        new Divinput('contentbig', 'taskName', "Enter a title", "task-title", "input-field", "input"); // Der Titel der Task
        new Span('taskName','taskName-requiered', "requiered font-label"); // requiered für den Titel
        new Labeldiv('contentbig', "description" , "Description", true); //Überschrift für die Description
        new Div('contentbig', "description-textarea"); // Div der Textarea
        new Textarea("description-textarea", "desc-input", "textarea", "Enter a Description" ); //Textarea
        new Span('description-textarea', 'description-textarea-requiered', "requiered font-label"); //requiered-span für Textarea
        new Labeldiv('contentbig','due-date', 'Due date', false);
        new Divdate('due-date', 'date-input' , 'input-field input-blue font-t6');
        new Span('due-date', 'due-date-requiered', "requiered font-label");
    }

    bottomCon() {
        new Labeldiv('content-con', 'priority', 'Priority', false);
        new Div('priority', 'priority-button')
        new Urgencybtn('priority-button', "Urgent");
        new Urgencybtn('priority-button', "Medium");
        new Urgencybtn('priority-button', "Low");
        new Labeldiv('content-con', 'assigned', 'Assigned to', true);
        new Divinputimg('assigned', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png', 'input-con-text-input-id', 'assigned-div'); //+ id + div_id
        docID('input-con-assigned-input-id').onclick = function () {dropdownMenu(`assigned-img`, 'assigned', 'assigned')};
        new Div('content-con', 'associate-con', '');
        new Labeldiv('content-con', 'category', 'Category', false);
        new Divinputimg('category', 'input-con', 'text', "Choose...", '../assets/img/arrow_drop_down.png',  'input-con-text-input-id', 'category-div'); //+ id + div_id
        docID('input-con-category-input-id').onclick = function () {dropdownMenu(`category-img`, 'category', 'category')};
        new Div('content-con', 'department-con', '');
        new Labeldiv('content-con', 'subtask', 'Subtask', true);
        new Divinputimg('subtask', 'input-con', 'text', 'Add new subtask', '../assets/img/+.png',  'input-con-text-input-id', 'subtask-div'); //+ id + div_id
        new Div('subtask', 'subtasks-con', '');
    }

    endButton() {
        new Div("addtaskCon", "button-con", "button-con"); //Div für die Add/Clear Button
        new Button("button-con", "clear-task", "secondary-button", clearTask, "Clear Task");
        new Button("button-con", "add-task-btn", "button", addTask, "Create Task");
    }

}