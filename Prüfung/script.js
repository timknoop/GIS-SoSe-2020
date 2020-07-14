"use strict";
var Abgabe;
(function (Abgabe) {
    function createArtikel() {
        for (let i = 0; i < Abgabe.artikel.length; i++) {
            if (Abgabe.artikel[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = Abgabe.artikel[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = Abgabe.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = Abgabe.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Abgabe.artikel[i].preis.toString());
        }
    }
    Abgabe.createArtikel = createArtikel;
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
        cartArtikel.push(Abgabe.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Abgabe.artikel[indexNr].img);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Abgabe.artikel[indexNr].name);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Abgabe.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Abgabe.handleTrolley = handleTrolley;
    let allCategory = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "Eis";
    document.getElementById("eisButton")?.appendChild(allCategory);
    let length = parseInt(localStorage.getItem("anzahlArtikel"));
    let preis = 0;
    let gesamtpreis = document.createElement("p");
    for (let index = 0; index <= length - 1; index++) {
        //Div erstellen
        let newDiv = document.createElement("div");
        document.getElementById("flexWarenkorb").appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index);
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        let price = document.createElement("p");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleDelete);
    }
    function handleDelete(_event) {
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script.js.map