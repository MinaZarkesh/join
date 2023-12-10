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
  id = "summaryBox";
  //in der summary.js
  //taskAmounts[index]

  //vielleiht hier mit reinbringen
  //descriptions[index]
  //images[index]

  constructor(index) {
    this.index = index;
    this.taskAmount = taskAmounts[index]; //Variable aus summary.js
    this.item = this.generateItemHTML();
    this.itemRender();
    this.checkScreenView(index);
    this.renderPosition();
  }

  generateItemHTML() {
    return /*html*/ `
<div id="item${this.id}${this.index}" class="col">  <div class="row">
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
      this.calcPositionDesktop(index);
    } else {
      this.calcPositionMobile(index);
    }
  }

  //calc Position for Desktop Version (window.innerWidth>1024) (px)
  calcPositionDesktop(index) {
    // let index = this.index;
    // for calcPosition
    this.containerWidth = 798;
    this.containerHeight = 498;
    this.spanheight = 36;
    this.gapColoumn = 16;
    this.gapRow = this.gapColoumn;
    this.itemAmountPerRow = 4;
    this.rowAmount = 2;

    this.itemWidth =
      this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

    this.height = this.containerHeight - this.spanheight;

    this.itemHeight = this.height / this.rowAmount - this.gapRow * 2;

    this.row = 0;
    if (index == 0) {
      let singleContainer = this.itemAmountPerRow - 1;
      this.itemWidth =
        (this.containerWidth * singleContainer) / this.itemAmountPerRow -
        this.gapRow;
      index = 0;
    } else if (index == 1) {
      index = this.itemAmountPerRow - 1;
    } else {
      index = index - 2;
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
    // let index = this.index;

    this.itemAmountPerRow = 2;
    this.spanheight = window.innerHeight * 0.005;
    this.rowAmount = 3.5;
    this.gapColoumn = 4;
    this.gapRow = 8;

    this.containerWidth = window.innerWidth * 0.9;
    this.containerHeight = window.innerHeight * 0.73;

    this.itemWidth =
      this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

    this.height = this.containerHeight - this.spanheight;
    this.singleContainer = this.rowAmount - 1;
    this.itemHeight =
      this.height / this.rowAmount - this.gapRow * this.singleContainer;
    this.row = 0;

    if (index == 0) {
      this.itemWidth = this.containerWidth - this.gapColoumn;
    } else if (index == 1) {
      this.itemWidth = this.containerWidth - this.gapRow;
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
      this.spanheight +
      this.gapRow / 2 +
      this.row * this.itemHeight +
      this.row * this.gapRow;

    this.left =
      this.gapColoumn / 2 + index * this.itemWidth + index * this.gapColoumn;
  }
}
