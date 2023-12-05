class MenuLink {
    link;
    name;
    constructor(id) {
        this.name = id.charAt(0).toUpperCase() + id.slice(1);
        this.link = `<a href="${id}.html">
                        <img src="../assets/img/${id}_menu.png" alt="${id}" />${this.name}
                    </a>`
        this.linkRender('navbar');
    }

    linkRender (id) {
        docID(id).innerHTML += this.link;
    }
}

{/* <div>
    <a id="summary" onclick="checkIndex('summary')"><img src="../assets/img/summary.png" /><span>Summary</span></a>
</div> */}

{/* <a href="#">
        <img src="../assets/img/summary.png" alt="summary" />Summary</a> */}