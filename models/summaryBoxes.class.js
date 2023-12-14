class SummaryBox {
  item;

  // for calcPosition
  containerWidth;
  containerHeight;
  spanheight;
  gapColoumn;
  gapRow;
  itemAmountPerRow;
  rowAmount;
  row;
  itemWidth;
  itemHeight;
  top;
  left;
  index;
  taskAmount;
  // id = "summaryBox";

  //in der summary.js
  //taskAmounts[index]

  //vielleiht hier mit reinbringen
  //descriptions[index]
  //images[index]

  constructor(id, index) {
    this.id = id;
    this.index = index;
    this.taskAmount = taskAmounts[index]; //Variable aus summary.js
    this.item = this.generateItemHTML();
    this.itemRender();
    this.checkScreenView(index);
    this.renderPosition();
  }

  generateItemHTML() {
    return /*html*/ `
<div onclick="navToBoard()" id="item${this.id}${this.index}" class="col">  <div class="row">
<img src=${images[this.index]}>
<h1 id="taskAmounts${this.id}${this.index}">${taskAmounts[this.index]}</h1>
</div>
<h6>
${descriptions[this.index]}
</h6></div>
`;
  }

  itemRender() {
    docID(`${this.id}${this.index}`).innerHTML = this.item;
  }

  updateTaskAmount(taskAmount, index) {
    if (this.taskAmount != taskAmount) {
      this.taskAmount = taskAmount;
      docID(`taskAmounts${this.id}${index}`).innerHTML = this.taskAmount;
      console.log("updated: ", index, this.taskAmount);
    }
  }

  renderPosition() {
    docID(`item${this.id}${this.index}`).style.width = `${this.itemWidth}px`;
    docID(`item${this.id}${this.index}`).style.height = `${this.itemHeight}px`;
    docID(`item${this.id}${this.index}`).style.left = `${this.left}px`;
    docID(`item${this.id}${this.index}`).style.top = `${this.top}px`;
  }

  checkScreenView(index) {
    if (window.innerWidth > screenSize) {
      //schreensize in summary.js
      this.calcPositionDesktop(index);
    } else {
      this.calcPositionMobile(index);
    }
  }

  //calc Position for Desktop Version (window.innerWidth>1024) (px)
  calcPositionDesktop(index) {
    this.containerWidth = 798;
    this.containerHeight = 498;
    this.spanheight = 36;
    this.gapColoumn = 16;
    this.gapRow = this.gapColoumn;
    this.itemAmountPerRow = itemAmount - 2;
    this.rowAmount = 2;
    this.row = 0;

    this.itemWidth =
      this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

    this.height = this.containerHeight - this.spanheight;
    this.itemHeight = this.height / this.rowAmount - this.gapRow;

    if (index == 0) {
      let singleContainer = this.itemAmountPerRow - 1;
      this.itemWidth =
        (this.containerWidth * singleContainer) / this.itemAmountPerRow -
        this.gapColoumn;
      index = 0;
    } else if (index == 1) {
      index = this.itemAmountPerRow - 1; //letztes in der ersten Reihe
    } else {
      index = index - 2; //min 2, -2 da 2 in der ersten Reihe
      this.row = 1;
    }

    this.top =
      this.spanheight +
      this.gapRow / 2 +
      this.row * this.itemHeight +
      this.row * this.gapRow;

    this.left =
      this.gapColoumn / 2 + index * this.itemWidth + index * this.gapColoumn;
  }

  calcPositionMobile(index) {
    //irgendwas stimmt was nicht

    this.itemAmountPerRow = 2;
    this.rowAmount = 4;
    this.gapColoumn = 8;
    this.gapRow = 8;

    this.containerWidth = window.innerWidth * 0.9 - 2;
    this.height = window.innerHeight * 0.8 - 2; // gesamtbreite - 10% (nav) - 10% (header) -2px für Rand
    //  this.height = 506.92; //um den Fehler zu analysieren

    this.itemWidth =
      this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

    this.itemHeight = this.height / this.rowAmount - this.gapRow;

    this.row = 0;

    if (index == 0) {
       this.itemWidth = this.containerWidth - this.gapColoumn;
    } else if (index == 1) {
      this.itemWidth = this.containerWidth - this.gapColoumn;
      index = 0;
      this.row = 1;
    } else if (index == 2 || index == 3) {
      index = index - 2;
      this.row = 2;
    } else {
      index = index - 4;
      this.row = 3;
    }

    this.top =
      this.gapRow / 2 + this.row * this.itemHeight + this.row * this.gapRow;

    this.left =
      this.gapColoumn / 2 + index * this.itemWidth + index * this.gapColoumn;
  }
}