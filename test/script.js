async function onloadFunc() {
 
  setData("/users", oldUsers);
  setData("/contacts", oldContacts);
  setData("/tasks", oldTasks);
  setData("/categorys", oldCategorys);

  contacts = await getData("/contacts");
  let users = oldUsers;
  users.push(
    {
        name: "Johannes Schaefer",
        mail: "johannes@test.de",
        nameTag: "JS",
        password: "test",
      }
  );
  setData("/users", users)
   setData("/test/", users);
  // deleteData("/test/0");
  console.log(contacts[1]);
}

const BASE_URL =
  "https://remotestorage-45af7-default-rtdb.europe-west1.firebasedatabase.app/";

// async function loadData(path = "") {
//   let response = await fetch(BASE_URL + path + ".json");
//   let responseToJson = await response.json();
//   return responseToJson;
// }

//abfragen
async function getData(path = "") {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  });
  return (responseToJson = await response.json());
}

//hinzufügen
async function postData(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}

//löschen
async function deleteData(path = "") {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "DELETE",
  });
  return (responseToJson = await response.json());
}

//update
async function setData(path, data) {
  let response = await fetch(BASE_URL + path + ".json", {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJson = await response.json());
}
