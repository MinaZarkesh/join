
let task = document.querySelectorAll(".task");
let toDo = document.querySelector(".toDo");
let done = document.querySelector(".done");
let toDoPos = toDo.getBoundingClientRect();
let donePos = done.getBoundingClientRect();

task.forEach(addStart);

function addStart(elem) {
    elem.addEventListener("touchstart", e => {

        let startX = e.changedTouches[0].clientX;
        let startY = e.changedTouches[0].clientY;


        elem.addEventListener("touchend", eve => {
            // elem.style.zIndex = 0;

            if (elem.getBoundingClientRect().top > donePos.top) {
                if (!done.contains(elem)) {
                    done.appendChild(elem);
                }
            }
            else if (elem.getBoundingClientRect().bottom < toDoPos.bottom) {
                if (!toDo.contains(elem)) {
                    toDo.appendChild(elem);
                }
            }

            elem.style.left = 0 + "px";
            elem.style.top = 0 + "px";
        });

        elem.addEventListener("touchmove", eve => {
            eve.preventDefault();
            let nextX = eve.changedTouches[0].clientX;
            let nextY = eve.changedTouches[0].clientY;
            elem.style.left = nextX - startX + "px";
            elem.style.top = nextY - startY + "px";
            // elem.style.zIndex = 10;
        });
    });
}
  

let segments;
// let toDoPos;
// let inProgessPos;
// let awaitFeedbackPos;
// let donePos;
let touchTasks;
let toDoTouchDiv;
let doneTouchDiv;
function checkMobile() {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    //Größe vom TouchGerät auch Laptop möglich
    segments = document.querySelectorAll(".board-segments");
    let toDoTouchDiv = document.querySelector(".toDo");
    let doneTouchDiv = document.querySelector(".done");
    toDoPos = segments[0].getBoundingClientRect();
    inProgessPos = segments[1].getBoundingClientRect();
    awaitFeedbackPos = segments[2].getBoundingClientRect();
    donePos = segments[3].getBoundingClientRect();
    console.log(toDoPos, inProgessPos, awaitFeedbackPos, donePos);
    touchTasks = document.querySelectorAll(".board-card");
    touchTasks.forEach(addStart);
  }
}

function addStart(elem, index) {
  elem.addEventListener("touchstart", (e) => {
    let startX = e.changedTouches[0].clientX;
    let startY = e.changedTouches[0].clientY;
    let elemBottom = elem.getBoundingClientRect().bottom;
    let elemTop = elem.getBoundingClientRect().top;
    // console.log("touchstart", startX, startY);
    let parentID = elem.parentElement.id;
    console.log("touchstart", " bottom: ", elemBottom, " top: ",elemTop);
    elem.addEventListener("touchend", (eve) => {
      // elem.style.backgroundColor = "red";
      console.log("touchend");
      //  elem.style.zIndex = 0;
      // touchDivName = elem.id.split("-");
      // touchDivID = elem.id.split("-");
      // touchDivID = touchDivID[touchDivID.length-1]
      // touchDivID = touchTasks.indexOf(elem);
      // console.log(touchTasks);
      // console.log("elemente move end:", " left: ", elem.style.left, " top: ",elem.style.top);

      if (elem.getBoundingClientRect().top < awaitFeedbackPos.top) {
        console.log("toDoPos", elem.getBoundingClientRect().top , awaitFeedbackPos.top);

          // if (!doneTouchDiv.contains(elem)) {
          //   doneTouchDiv.appendChild(elem);
          // }
      }
      else if (elem.getBoundingClientRect().left > toDoPos.right && elem.getBoundingClientRect().left > inProgessPos.left) {
        console.log("inProgess");
          // if (!toDoTouchDiv.contains(elem)) {
          //   toDoTouchDiv.appendChild(elem);
          // }
      }

     setTimeout(()=>{
      elem.style.left = 0 + "px";
      elem.style.top = 0 + "px";
     }, 2000);
    });

    elem.addEventListener("touchmove", (eve) => {
      eve.preventDefault();
      console.log("touchmove");
      let nextX = eve.changedTouches[0].clientX;
      let nextY = eve.changedTouches[0].clientY;
      elem.style.left = nextX - startX + "px";
      elem.style.top = nextY - startY + "px";
      // elem.style.zIndex = 10;

      // console.log("elemente move:", elem.style.left,elem.style.top );
    });
  });
}