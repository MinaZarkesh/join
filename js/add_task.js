function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title");
    new Requiered('taskName');
    new Divtextarea('contentbig', "description" , "Description", true);
    new Divdate('contentbig','due-date', 'Due date', false);
    new Childdiv('contentCon', 'priority', 'Priority', false, 'priority-button');
    new Urgencybtn('priority-button', "Urgent");
    new Urgencybtn('priority-button', "Medium");
    new Urgencybtn('priority-button', "Low");
    new Divselect('contentCon', 'assigned', 'Assigned to', true, 'assigned-select');
    new Selectoption('assigned-select', "selected", "Choose...");
    new Selectoption('assigned-select', "value='1'", "Bild Vorname Nachname");
    new Selectoption('assigned-select', "value='2'", "Bild Vorname Nachname");
    new Selectoption('assigned-select', "value='3'", "Bild Vorname Nachname");
    new Divselect('contentCon', 'category', 'Category', false, 'category-select');
    new Selectoption('category-select', "selected", "Choose...");
    new Selectoption('category-select', "value='1'", "Bild Category");
    new Selectoption('category-select', "value='2'", "Bild Category");
    new Selectoption('category-select', "value='3'", "Bild Category");
    new Labeldiv('contentCon', 'subtask', 'Subtask', false);
    new Divinputimg('Subtask', 'subtask-input', 'text', 'Add new subtask', '../assets/img/+.png');
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask');
}

