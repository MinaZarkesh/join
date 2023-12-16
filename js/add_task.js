function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title")
    new Divtextarea('contentbig', "Description", true)
    new Divdate('contentbig', 'Due-date', false);
    new Divselect('contentCon', 'Assigned to', false, 'assigned-select');
    new Selectoption('assigned-select', "selected", "Choose...");
    new Selectoption('assigned-select', "value='1'", "Bild Vorname Nachname");
    new Selectoption('assigned-select', "value='2'", "Bild Vorname Nachname");
    new Selectoption('assigned-select', "value='3'", "Bild Vorname Nachname");
    new Divselect('contentCon', 'Category', false, 'category-select');
    new Selectoption('category-select', "selected", "Choose...")
    new Selectoption('category-select', "value='1'", "Bild Category");
    new Selectoption('category-select', "value='2'", "Bild Category");
    new Selectoption('category-select', "value='3'", "Bild Category");
    new Labeldiv('contentCon', 'Subtask', false);
    new Divinputimg('Subtask', 'subtask-input', 'text', 'Add new subtask', '../assets/img/+.png');
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask')
}

