class SummaryBox {

    // for calcPosition
  containerWidth = 798;
  containerHeight = 620;
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

  constructor(id, index) {
    this.renderDescitption();
    this.item = /*html*/ `
             <div id="item${id}${index}" class="col">${description}</div>
        `;
    this.itemRender(id, index);
    this.calcPosition(index);
    this.renderPosition(id, index);
  }

renderDescitption(){
  description = /*html*/`
   <div class="text-center">
   <img src="../assets/img/to_do_summary.png">
    <h1>10</h1>
   </div>
   <h6>
    Tasks Done
   </h6>
  `
}
  itemRender(id, index) {
    docID(`${id}${index}`).innerHTML = this.item;
  }


  renderPosition(id, index) {
    docID(`item${id}${index}`).style.width = `${this.itemWidth}px`;
    docID(`item${id}${index}`).style.left = `${this.left}px`;
    docID(`item${id}${index}`).style.top = `${this.top}px`;
  }

  
  calcPosition(index) {
    this.itemWidth = this.containerWidth / this.itemAmountPerRow - this.gap;
    this.itemHeight =
      (this.containerHeight - this.spanheight) / this.rowAmount - this.gap;

    if (index == 0) {
      let singleContainer = this.itemAmountPerRow - 1;
      this.itemWidth = (this.containerWidth * singleContainer) / this.itemAmountPerRow - this.gap;
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
      this.gap / 2 +
      this.spanheight +
      this.row * this.itemHeight +
      this.gap * (this.rowAmount + 1);
    this.left = this.gap / 2 + index * this.itemWidth + index * this.gap;
  }
}
