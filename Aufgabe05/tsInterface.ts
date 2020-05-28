//Interface Men
interface ArtikelMen {
    img: string;
    name: string;
    description: string;
    preis: string;
}

//Artikel Men
let artikel1: ArtikelMen = { img: "beige_sweater.png", name: "Veronique Branquinho", description: "Sweater", preis: "120€" };
let artikel2: ArtikelMen = { img: "raf_simons_jacket.png", name: "Raf Simons", description: "Jacket", preis: "7.000€" };
let artikel3: ArtikelMen = { img: "raf_simons_hoodie.png", name: "Raf Simons", description: "Hoodie", preis: "2.370" };
let artikel4: ArtikelMen = { img: "vivienne_westwood_jacket.png", name: "Vivienne Westwood", description: "Jacket", preis: "1.800€" };
let artikel5: ArtikelMen = { img: "jean_paul_gaultier_jacket.png", name: "Jean Paul Gaultier€", description: "Jacket", preis: "1.800€" };
let artikel6: ArtikelMen = { img: "chanel_basketball.png", name: "Chanel", description: "Basketball", preis: "1.000€" };


//Artikel Men Array
let artikelMen: ArtikelMen[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

//Interface Women
interface ArtikelWomen {
    img: string;
    name: string;
    description: string;
    preis: string;
}

//Artikel Women
let artikel7: ArtikelWomen = { img: "dior_bag.png", name: "Dior", description: "Book Tote", preis: "3.000€" };
let artikel8: ArtikelWomen = { img: "burberry_coat.png", name: "Burberry", description: "Coat", preis: "100€" };
let artikel9: ArtikelWomen = { img: "jean_paul_gaultier_top.png", name: "Jean Paul Gaultier", description: "Top", preis: "2.900€" };
let artikel10: ArtikelWomen = { img: "cartier_ring.png", name: "Cartier", description: "Ring", preis: "3.000€" };
let artikel11: ArtikelWomen = { img: "chanel_sweater.png", name: "Chanel", description: "Sweater", preis: "6.350€" };
let artikel12: ArtikelWomen = { img: "chanel_wool.png", name: "Chanel", description: "Wool", preis: "2.750€" };

//Artikel Women Array
let artikelWomen: ArtikelWomen[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];

//MEN
for (let index: number = 0; index < artikelMen.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("flex1")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelMen[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelMen[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelMen[index].description;
    document.getElementById("div1" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelMen[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Buy";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}

//WOMEN
for (let index: number = 0; index < artikelWomen.length; index++) {
    //DIV
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("flex2")?.appendChild(newDiv);

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelWomen[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelWomen[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikelWomen[index].description;
    document.getElementById("div2" + index)?.appendChild(description);

    //PREIS
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelWomen[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Buy";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}