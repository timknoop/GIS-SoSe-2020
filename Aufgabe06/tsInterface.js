"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Artikel
    let artikel1 = { img: "beige_sweater.png", name: "Veronique Branquinho", description: "Sweater", preis: 120, category: 1 };
    let artikel2 = { img: "raf_simons_jacket.png", name: "Raf Simons", description: "Jacket", preis: 7000, category: 1 };
    let artikel3 = { img: "raf_simons_hoodie.png", name: "Raf Simons", description: "Hoodie", preis: 2370, category: 1 };
    let artikel4 = { img: "vivienne_westwood_jacket.png", name: "Vivienne Westwood", description: "Jacket", preis: 1800, category: 1 };
    let artikel5 = { img: "jean_paul_gaultier_jacket.png", name: "Jean Paul Gaultier€", description: "Jacket", preis: 1800, category: 1 };
    let artikel6 = { img: "chanel_basketball.png", name: "Chanel", description: "Basketball", preis: 1000, category: 1 };
    let artikel7 = { img: "dior_bag.png", name: "Dior", description: "Book Tote", preis: 3000, category: 2 };
    let artikel8 = { img: "burberry_coat.png", name: "Burberry", description: "Coat", preis: 100, category: 2 };
    let artikel9 = { img: "jean_paul_gaultier_top.png", name: "Jean Paul Gaultier", description: "Top", preis: 2900, category: 2 };
    let artikel10 = { img: "cartier_ring.png", name: "Cartier", description: "Ring", preis: 3000, category: 2 };
    let artikel11 = { img: "chanel_sweater.png", name: "Chanel", description: "Sweater", preis: 6350, category: 2 };
    let artikel12 = { img: "chanel_wool.png", name: "Chanel", description: "Wool", preis: 2750, category: 2 };
    //Artikel Array
    let artikel = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12];
    for (let i = 0; i < artikel.length; i++) {
        if (artikel[i].category == 1) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("flex1")?.appendChild(newDiv);
        }
        if (artikel[i].category == 2) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementById("flex2")?.appendChild(newDiv);
        }
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = artikel[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = artikel[i].name;
        document.getElementById("div" + i)?.appendChild(name);
        //DESCRIPTION
        let description = document.createElement("p");
        description.innerHTML = artikel[i].description;
        document.getElementById("div" + i)?.appendChild(description);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = artikel[i].preis + "€";
        document.getElementById("div" + i)?.appendChild(price);
        //BUY
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Buy";
        kaufen.addEventListener("click", handleTrolley);
        document.getElementById("div" + i)?.appendChild(kaufen);
        kaufen.setAttribute("preis", artikel[i].preis.toString());
    }
    //Einkaufswagen
    let summe = 0;
    let count = 0;
    let artikelCounter = 0;
    let blasenDiv = document.createElement("div");
    function handleTrolley(_event) {
        if (artikelCounter >= 0) {
            document.getElementById("warencounter")?.appendChild(blasenDiv);
        }
        artikelCounter++;
        blasenDiv.innerHTML = artikelCounter + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = count + parseInt(_event.currentTarget?.getAttribute("preis"));
            count = summe;
        }
        console.log(summe.toFixed(0));
    }
    let allCategory = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "All";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);
    let menCategory = document.createElement("a");
    menCategory.id = "men";
    menCategory.innerHTML = "Men";
    menCategory.addEventListener("click", handleKategorie);
    document.getElementById("menButton")?.appendChild(menCategory);
    let womenCategory = document.createElement("a");
    womenCategory.id = "women";
    womenCategory.innerHTML = "Women";
    womenCategory.addEventListener("click", handleKategorie);
    document.getElementById("womenButton")?.appendChild(womenCategory);
    function handleKategorie(_event) {
        if (_event.currentTarget.getAttribute("id") == "all") {
            document.getElementById("menBlock").style.display = "block";
            document.getElementById("womenBlock").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "men") {
            document.getElementById("menBlock").style.display = "block";
            document.getElementById("womenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "women") {
            document.getElementById("menBlock").style.display = "none";
            document.getElementById("womenBlock").style.display = "block";
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=tsInterface.js.map