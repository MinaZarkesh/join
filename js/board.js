/**
 * Filters the contacts based on the input search value.
 * made by Mina Zarkesh
 * @param {string} search - The search value to filter the contacts.
 * @return {void} No return value.
 */
function filterContacts() {
    renderAssignetTo();
  
    let contactScroll = docID("assignetTo");
    let search = docID("assignetToInput").value.replace(" ", "").toLowerCase();
    contactScroll.classList.remove("d-none");
    const contactsAddTasks = document.querySelectorAll(".assignetToAddTask");
  
    contactsAddTasks.forEach((contactAddTask) => {
      const contactNameElement = contactAddTask.querySelector(".contactName");
      const contactName = contactNameElement.textContent.replace(" ", "").toLowerCase();
      if (!search || contactName.includes(search)) {
        contactAddTask.style.display = "flex"; // Karte anzeigen, wenn das Suchfeld leer ist oder wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff enthält
      } else {
        contactAddTask.style.display = "none"; // Karte ausblenden, wenn der Titel, die Kategorie oder die Beschreibung den Suchbegriff nicht enthält
      }
    });
  }