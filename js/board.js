
function initBoard() {
  init();
  new Div("main-board", "board-head-con"); //the head container  
  new Div("board-head-con", "search-con");
  new Divinputimg("search-con", 'search', 'text', "Find Task", '../assets/img/searchLupe.png');
  new Button("search-con","","button","", "Ask Task");
  new Img("board-head-con", '', '', '../assets/img/cross white.png');
  new Div("main-board", "board-content-con", ''); //the content container
  new BoardSegment("board-content-con", "to-do", "To do");
  // new BoardCard('to-do-con', 0);
  new BoardSegment("board-content-con", "in-progress", "In progress");
  new BoardSegment("board-content-con", "await-feedback", "Await Feedback");
  new BoardSegment("board-content-con", "done", "Done");
  createBoardCards();
  new Div("main-board", "main-board-card");
  openBigCard(1);
}

function createBoardCards() {
  oldTasks.forEach((e) => {
    new BoardCard(e);
  })
}

function openBigCard(id) {
  oldTasks.forEach((e) => {
    if(e.id == id) {
      new BoardBigCard(e, "main-board-card");
    }
  })
}



/**
 * Filters the contacts based on the input search value.
 * made by Mina Zarkesh
 * @param {string} search - The search value to filter the contacts.
 * @return {void} No return value.
 */
// function filterContacts() {
//     renderAssignetTo();
  
//     let contactScroll = docID("assignetTo");
//     let search = docID("assignetToInput").value.replace(" ", "").toLowerCase();
//     contactScroll.classList.remove("d-none");
//     const contactsAddTasks = document.querySelectorAll(".assignetToAddTask");
  
//     contactsAddTasks.forEach((contactAddTask) => {
//       const contactNameElement = contactAddTask.querySelector(".contactName");
//       const contactName = contactNameElement.textContent.replace(" ", "").toLowerCase();
//       if (!search || contactName.includes(search)) {
//         contactAddTask.style.display = "flex"; // Karte anzeigen, wenn das Suchfeld leer ist oder wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff enthält
//       } else {
//         contactAddTask.style.display = "none"; // Karte ausblenden, wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff nicht enthält
//       }
//     });
//   }