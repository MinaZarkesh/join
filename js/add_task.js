function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title")
    new Divtextarea('contentbig', "Description", true)
    new Divdate('contentbig', 'Due-date', false);
    new Divselect('contentCon', 'Category', false);
    new Selectoption('category-select', "selected", "Choose...")
    new Selectoption('category-select', "value='1'", "Bild Category");
    new Selectoption('category-select', "value='2'", "Bild Category");
    new Selectoption('category-select', "value='3'", "Bild Category");
    new Labeldiv('contentCon', 'Subtask', false);
    new Divinputimg('Subtask', 'subtask-input', 'text', 'Add new subtask', '../assets/img/+.png');
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask')
}
