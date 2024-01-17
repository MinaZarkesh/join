//for reset the Backend

/**
 * Reset for the Backemd 
 * beispiel: users: {name: "Guest",mail: "guest@guest.de",nameTag: "G",password: "test123",}
 * tasks:  {
      container: "to-do-con",
      category: ["Office", "Design"],
      title: "Kochwelt Page & Recipe Recommender",
      description: "Build start page with recipe recommendation.",
      date: "2024-01-24",
      priority: "Medium",
      priorityImg: "../assets/img/medium.svg",
      associates: [5, 6, 9],
      assignedTo: ["Emmanuel Mauer", "Marcel Bauer", "Anton Mayer"],
      assignedToNameTag: ["EM", "MB", "AM"],
      assignedToColor: ["--variant10", "--variant16", "--variant09"],
      subtasks: ["Implement Recipe Recommendation", "Start Page Layout"],
      subtaskschecked: ["checked", "checked"],
      id: 1,
    },
* contact: {
      name: "Wilhelmina Schattschneider",
      color: "--variant09",
      mail: "wschatt@gmail.com",
      phone: "+49-123-123",
      nameTag: "WS",
      idx: 0,
    },
*  {
    name: "Office",
    color: "--variant02",
    nameTag: "OF",
    idx: 0
  }
 */
let oldUsers = [
    {
      name: "Guest",
      mail: "guest@guest.de",
      nameTag: "G",
      password: "test123",
    },
    {
      name: "Junus Ergin",
      mail: "junus@test.de",
      nameTag: "JE",
      password: "test",
    },
    {
      name: "Anton Mayer",
      mail: "antonmayer@test.de",
      nameTag: "AM",
      password: "test123",
    },
    {
      name: "Anton Mayer",
      mail: "antom@gmail.com",
      nameTag: "AM",
      password: "test123",
    },
    {
      name: "Sofia Muller",
      mail: "sofiam@gmail.com",
      nameTag: "SM",
      password: "mypassword123",
    },
    {
      name: "Anja Schulz",
      mail: "schulz@hotmail.com",
      nameTag: "AS",
      password: "mypassword123",
    },
    {
      name: "Peter Pan",
      mail: "pp@nox.de",
      nameTag: "PP",
      password: "wendy",
    },
    {
      name: "Mina  M  Zarkesh",
      mail: "mina@email.de",
      nameTag: "MZ",
      password: "hallo123",
    },
  ];

 let oldTasks = [
    {
      container: "to-do-con",
      category: ["Office", "Design"],
      title: "Kochwelt Page & Recipe Recommender",
      description: "Build start page with recipe recommendation.",
      date: "2024-01-24",
      priority: "Medium",
      priorityImg: "../assets/img/medium.svg",
      associates: [5, 6, 9],
      assignedTo: ["Emmanuel Mauer", "Marcel Bauer", "Anton Mayer"],
      assignedToNameTag: ["EM", "MB", "AM"],
      assignedToColor: ["--variant10", "--variant16", "--variant09"],
      subtasks: ["Implement Recipe Recommendation", "Start Page Layout"],
      subtaskschecked: ["checked", "checked"],
      id: 1,
    },
    {
      container: "await-feedback-con",
      category: ["Office"],
      title: "Titel: Essen",
      description:
        "Das ist die Description, hier etwas text : handy telefonieren",
      date: "2024-08-30",
      priority: "Low",
      priorityImg: "../assets/img/low.png",
      associates: [6, 9, 5],
      assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
      assignedToNameTag: ["MB", "AM", "EM"],
      assignedToColor: ["--variant16", "--variant09", "--variant10"],
      subtasks: ["Start Page Layout", "Subtask2"],
      subtaskschecked: ["unchecked", "unchecked"],
      id: 3,
    },
    {
      container: "in-progress-con",
      category: ["Design"],
      title: "Titel: Halloweenparty, Ähh Silvester",
      description:
        "Das ist die Description, hier etwas text : handy telefonieren",
      date: "2024-12-31",
      priority: "Urgent",
      priorityImg: "../assets/img/urgentImg.png",
      associates: [6, 9, 5],
      assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
      assignedToNameTag: ["MB", "AM", "EM"],
      assignedToColor: ["--variant16", "--variant09", "--variant10"],
      subtasks: ["Start Page Layout", "Subtask3"],
      subtaskschecked: ["unchecked", "checked"],
      id: 4,
    },
    {
      container: "done-con",
      category: ["Engine", "Office"],
      title: "Titel: Sommer Grillparty",
      description: "Wir treffen uns alle zur Grillparty",
      date: "2024-12-27",
      priority: "Low",
      priorityImg: "../assets/img/low.png",
      associates: [6, 9, 5],
      assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
      assignedToNameTag: ["MB", "AM", "EM"],
      assignedToColor: ["--variant16", "--variant09", "--variant10"],
      subtasks: ["Grill aufstellen", "Spaß haben"],
      subtaskschecked: ["checked", "checked"],
      id: 5,
    },
    {
      container: "in-progress-con",
      category: ["Engine"],
      title: "Titel: Weihnachtsfeier",
      description:
        "Das ist die Description, hier etwas text : handy telefonieren",
      date: "2024-12-23",
      priority: "Urgent",
      priorityImg: "../assets/img/urgentImg.png",
      associates: [6, 9, 5],
      assignedTo: ["Marcel Bauer", "Anton Mayer", "Emmanuel Mauer"],
      assignedToNameTag: ["MB", "AM", "EM"],
      assignedToColor: ["--variant16", "--variant09", "--variant10"],
      subtasks: ["Subtask1", "Start Page Layout"],
      subtaskschecked: ["checked", "unchecked"],
      id: 9
    },
  ];  

let oldContacts = [
    {
      name: "Wilhelmina Schattschneider",
      color: "--variant09",
      mail: "wschatt@gmail.com",
      phone: "+49-123-123",
      nameTag: "WS",
      idx: 0,
    },
    {
      name: "Anja Schulz",
      color: "--variant13",
      mail: "schulz@hotmail.com",
      phone: "49-123-123",
      nameTag: "AS",
      idx: 1,
    },
    {
      name: "Benedikt Ziegler",
      color: "--default",
      mail: "benedikt@gmail.com",
      phone: "49-123-123",
      nameTag: "BZ",
      idx: 2,
    },
    {
      name: "David Eisenberg",
      color: "--variant14",
      mail: "davidberg@gmail.com",
      phone: "49-123-123",
      nameTag: "DE",
      idx: 3,
    },
    {
      name: "Eva Fischer",
      color: "--variant06",
      mail: "eva@gmail.com",
      phone: "49-222-222",
      nameTag: "EF",
      idx: 4,
    },
    {
      name: "Emmanuel Mauer",
      color: "--variant10",
      mail: "emmanuelma@gmail.com",
      phone: "49-222-222",
      nameTag: "EM",
      idx: 5,
    },
    {
      name: "Marcel Bauer",
      color: "--variant16",
      mail: "bauer@gmail.com",
      phone: "49-222-222",
      nameTag: "MB",
      idx: 6,
    },
    {
      name: "Tatjana Wolf",
      color: "--variant15",
      mail: "wolf@gmail.com",
      phone: "49-222-222",
      nameTag: "TW",
      idx: 7,
    },
    {
      name: "Sofia Müller",
      color: "--variant04",
      mail: "sofiam@gmail.com",
      phone: "49-222-222",
      nameTag: "SM",
      idx: 8,
    },
    {
      name: "Anton Mayer",
      color: "--variant09",
      mail: "antom@gmail.com",
      phone: "49-123-123",
      nameTag: "AM",
      idx: 9,
    }
  ];

let  oldCategorys = [
  {
    name: "Office",
    color: "--variant02",
    nameTag: "OF",
    idx: 0
  },
  {
    name: "Design",
    color: "--variant03",
    nameTag: "DN",
    idx: 1
  },
  {
    name: "Engine",
    color: "--variant04",
    nameTag: "EN",
    idx: 2
  },
];
  
/*
* backgroudcolors, not in Backend
*/
let backgroundcolors = [
    "--default",
    "--variant02",
    "--variant03",
    "--variant04",
    "--variant05",
    "--variant06",
    "--variant07",
    "--variant08",
    "--variant09",
    "--variant10",
    "--variant11",
    "--variant12",
    "--variant13",
    "--variant14",
    "--variant15",
    "--variant16",
  ];