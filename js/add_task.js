function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title")
    new Divtextarea('contentbig', "Description", true)
    new Divdate('contentbig', 'Due-date', false);
    new Labeldiv('contentCon', 'Subtask', false);
    new Divinputimg('Subtask', 'subtask-input', 'text', 'Add new subtask', '../assets/img/+.png');
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask')
}
