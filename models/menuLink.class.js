class MenuLink {
    link;
    name;
    className;
    constructor(id) {
        this.className = "active";
        this.name = id.charAt(0).toUpperCase() + id.slice(1);
        this.name = this.name.replace("_t", " T");
        // onClick="activeLink(${id})" 
        this.link = `<a class="nav-link font-body" href="${id}.html">
                        <img src="../assets/img/${id}_menu.png" alt="${id}" />${this.name}
                    </a>`
        this.linkRender('navbar');
    }

    linkRender (id) {
        docID(id).innerHTML += this.link;
    }
    
    // activeLink(id){
    //     console.log("activeLink: ", id);
    //     document.querySelector('.click').addEventListener('click', (e) => {
    //         // Do whatever you want
    //         docID(id).classList.add(className); 
    //       });
    // }
}

{/* <div>
    <a id="summary" onclick="checkIndex('summary')"><img src="../assets/img/summary.png" /><span>Summary</span></a>
</div> */}

{/* <a href="#">
        <img src="../assets/img/summary.png" alt="summary" />Summary</a> */}