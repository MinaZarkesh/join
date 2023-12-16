function initAddtask() {
    init();
    new Divinput('contentbig', 'taskName', "Enter a title")
    new Divtextarea('contentbig', "Description", true)
    new Divdate('contentbig', 'Due-date', false);
    new Subtitles('contentCon', 'die-subtask', 'Dies ist eine subtask')
}
