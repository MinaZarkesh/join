
function initBoard() {
  init();
  new Div("main-board", "board-head-con", ''); //the head container
  new Div("main-board", "board-content-con", ''); //the content container
  new Div("board-content-con", "to-do-con", "board-segments"); // the to-do Container
  new Span("to-do-con", "", "", "to-do"); 
  new Div("board-content-con", "in-progres-con", "board-segments"); // the in progress Container
  new Span("in-progres-con", "", "", "in progress");
  new Div("board-content-con", "await-feedback-con", "board-segments"); // the await Feedback Container
  new Span("await-feedback-con", "", "", "Await Feedback");
  new Div("board-content-con", "done-con", "board-segments"); // the done Container
  new Span("done-con", "", "", "done");
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