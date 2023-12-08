function initBoard() {
  init();
  createSummaryBoxes();
}

let description= "Hier könnte dein Name stehen";
function createSummaryBoxes(){
    new SummaryBox("summaryBox", 0);
    new SummaryBox("summaryBox", 1);
    new SummaryBox("summaryBox", 2);
    new SummaryBox("summaryBox", 3);
    new SummaryBox("summaryBox", 4);
    new SummaryBox("summaryBox", 5);
}