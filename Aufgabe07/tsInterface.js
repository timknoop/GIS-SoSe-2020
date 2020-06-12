"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Interface
    function createArtikel() {
        for (let i = 0; i < Aufgabe07.artikel.length; i++) {
            if (Aufgabe07.artikel[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 2) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07.artikel[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = Aufgabe07.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //DESCRIPTION
            let description = document.createElement("p");
            description.innerHTML = Aufgabe07.artikel[i].description;
            document.getElementById("div" + i)?.appendChild(description);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = Aufgabe07.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Buy";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07.artikel[i].preis.toString());
        }
    }
    Aufgabe07.createArtikel = createArtikel;
    //Einkaufswagen
    let summe = 0;
    let count = 0;
    let artikelCounter = 0;
    let blasenDiv = document.createElement("div");
    let cartArtikel = [];
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
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartArtikel.push(Aufgabe07.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].img);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].name);
        localStorage.setItem("artikel_description" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].description);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Aufgabe07.handleTrolley = handleTrolley;
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
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=tsInterface.js.map