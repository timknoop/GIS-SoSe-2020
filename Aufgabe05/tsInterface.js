"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    //Artikel Men
    let artikel1 = { img: "beige_sweater.png", name: "Veronique Branquinho", description: "Sweater", preis: "120€" };
    let artikel2 = { img: "raf_simons_jacket.png", name: "Raf Simons", description: "Jacket", preis: "7.000€" };
    let artikel3 = { img: "raf_simons_hoodie.png", name: "Raf Simons", description: "Hoodie", preis: "2.370" };
    let artikel4 = { img: "vivienne_westwood_jacket.png", name: "Vivienne Westwood", description: "Jacket", preis: "1.800€" };
    let artikel5 = { img: "jean_paul_gaultier_jacket.png", name: "Jean Paul Gaultier€", description: "Jacket", preis: "1.800€" };
    let artikel6 = { img: "chanel_basketball.png", name: "Chanel", description: "Basketball", preis: "1.000€" };
    //Artikel Men Array
    let artikelMen = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];
    //Artikel Women
    let artikel7 = { img: "dior_bag.png", name: "Dior", description: "Book Tote", preis: "3.000€" };
    let artikel8 = { img: "burberry_coat.png", name: "Burberry", description: "Coat", preis: "100€" };
    let artikel9 = { img: "jean_paul_gaultier_top.png", name: "Jean Paul Gaultier", description: "Top", preis: "2.900€" };
    let artikel10 = { img: "cartier_ring.png", name: "Cartier", description: "Ring", preis: "3.000€" };
    let artikel11 = { img: "chanel_sweater.png", name: "Chanel", description: "Sweater", preis: "6.350€" };
    let artikel12 = { img: "chanel_wool.png", name: "Chanel", description: "Wool", preis: "2.750€" };
    //Artikel Women Array
    let artikelWomen = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
    //MEN
    for (let index = 0; index < artikelMen.length; index++) {
        //DIV
        let newDiv = document.createElement("div");
        newDiv.id = "div1" + index;
        document.getElementById("flex1")?.appendChild(newDiv);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = artikelMen[index].img;
        document.getElementById("div1" + index)?.appendChild(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = artikelMen[index].name;
        document.getElementById("div1" + index)?.appendChild(name);
        //DESCRIPTION
        let description = document.createElement("p");
        description.innerHTML = artikelMen[index].description;
        document.getElementById("div1" + index)?.appendChild(description);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = artikelMen[index].preis;
        document.getElementById("div1" + index)?.appendChild(price);
        //BUY
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Buy";
        document.getElementById("div1" + index)?.appendChild(kaufen);
    }
    //WOMEN
    for (let index = 0; index < artikelWomen.length; index++) {
        //DIV
        let newDiv = document.createElement("div");
        newDiv.id = "div2" + index;
        document.getElementById("flex2")?.appendChild(newDiv);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = artikelWomen[index].img;
        document.getElementById("div2" + index)?.appendChild(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = artikelWomen[index].name;
        document.getElementById("div2" + index)?.appendChild(name);
        //DESCRIPTION
        let description = document.createElement("p");
        description.innerHTML = artikelWomen[index].description;
        document.getElementById("div2" + index)?.appendChild(description);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = artikelWomen[index].preis;
        document.getElementById("div2" + index)?.appendChild(price);
        //BUY
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Buy";
        document.getElementById("div2" + index)?.appendChild(kaufen);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//Interface Men
//# sourceMappingURL=tsInterface.js.map