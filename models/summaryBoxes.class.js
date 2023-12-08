class SummaryBox {
  // for calcPosition
  containerWidth = 798;
  containerHeight = 498;
  spanheight = 36;
  gap = 16;
  itemAmountPerRow = 4;
  rowAmount = 2;
  row;
  itemWidth;
  itemHeight;

  taskCounter;
  img;
  item;
  index;
  top;
  left;
//descriptions[index] <-- in der summary.js
  constructor(id, index) {
    this.item = /*html*/ `
             <div id="item${id}${index}" class="col">  <div class="row">
   <img src=${images[index]}>
    <h1>${taskAmounts[index]}</h1>
   </div>
   <h6>
  ${descriptions[index]}
   </h6></div>
        `;
    this.itemRender(id, index);
    this.calcPosition(index);
    this.renderPosition(id, index);
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

//calc Position for Desktop Version (window.innerWidth>1023)
  calcPosition(index) {
    this.itemWidth = this.containerWidth / this.itemAmountPerRow - this.gap;

    this.height = this.containerHeight - this.spanheight;

    this.itemHeight = this.height / this.rowAmount - this.gap * 2;

    if (index == 0) {
      let singleContainer = this.itemAmountPerRow - 1;
      this.itemWidth =
        (this.containerWidth * singleContainer) / this.itemAmountPerRow -
        this.gap;
      index = 0;
      this.row = 0;
    } else if (index == 1) {
      index = this.itemAmountPerRow - 1;
      this.row = 0;
    } else {
      index = index - 2;
      this.row = 1;
    }

    this.top =
      this.spanheight +
      this.gap / 2 +
      this.row * this.itemHeight +
      this.row * this.gap;
      
      this.left = this.gap / 2 + index * this.itemWidth + index * this.gap;
  }
}
