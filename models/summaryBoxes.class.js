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

  //in der summary.js
  //taskAmounts[index]

  //vielleiht hier mit reinbringen
  //descriptions[index]
  //images[index]

  constructor(id, index, view, containerInnerWidth, containerInnerHeight) {
    this.containerWidth = containerInnerWidth;
    this.containerHeight =  containerInnerHeight;
    this.item = /*html*/ `
             <div id="item${id}${index}" class="col">  <div class="row">
   <img src=${images[index]}>
      <h1>${taskAmounts[index]}</h1>
   </div>
   <h6>
      ${descriptions[index]}
   </h6></div>
        `;
  
    this.checkScreenView(index, view, containerInnerWidth, containerInnerHeight);
    this.itemRender(id, index);
    this.renderPosition(id, index);
  }

  checkScreenView(index, view, ciw, cih) {
    if (view === "desktop") {
      this.calcPositionDesktop(index);
    } else {
      this.calcPositionMobile(index, ciw, cih);
    }
  }

  itemRender(id, index) {
    docID(`${id}${index}`).innerHTML = this.item;
  }

  renderPosition(id, index) {
    docID(`item${id}${index}`).style.width = `${this.itemWidth}px`;
    docID(`item${id}${index}`).style.height = `${this.itemHeight}px`;
    docID(`item${id}${index}`).style.left = `${this.left}px`;
    docID(`item${id}${index}`).style.top = `${this.top}px`;
  }

  //calc Position for Desktop Version (window.innerWidth>1023) (px)
  calcPositionDesktop(index) {

        // for calcPosition
    this.containerWidth = 798;
    this.containerHeight = 498;
    this.spanheight = 36;
    this.gapColoumn = 16;
    this.gapRow = this.gapColoumn;
    this.itemAmountPerRow = 4;
    this.rowAmount = 2;


    this.itemWidth = this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

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

    this.left = this.gapColoumn / 2 + index * this.itemWidth + index * this.gapColoumn;
  }

  calcPositionMobile(index, ciw, cih) {
    this.itemAmountPerRow = 2;
    this.spanheight = cih*0.005;
    this.rowAmount = 3.5;
    this.gapColoumn = 4;
    this.gapRow = 8;

    
    this.containerWidth = ciw*0.9;
    this.containerHeight = cih*0.75;

    console.log(
      "calcPositionMobile: mainsummarywidth: ",
      this.containerWidth,
      "mainsummaryHeight ",
      this.containerHeight
    );

    this.itemWidth = this.containerWidth / this.itemAmountPerRow - this.gapColoumn;

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
      
    this.left = this.gapColoumn / 2 + index * this.itemWidth + index * this.gapColoumn;
  }
}
