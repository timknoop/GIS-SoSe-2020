"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let length = parseInt(localStorage.getItem("anzahlArtikel"));
    for (let index = 0; index <= length - 1; index++) {
        //Div erstellen
        let newDiv = document.createElement("div");
        document.getElementById("flexWarenkorb")?.appendChild(newDiv);
        newDiv.id = "divId" + index;
        console.log("divId" + index);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index);
        document.getElementById("div" + index)?.appendChild(imgElement);
        console.log(imgElement);
        //NAME
        let name = document.createElement("h1");
        name.innerHTML = localStorage.getItem("artikel_name" + index);
        document.getElementById("div" + index)?.appendChild(name);
        console.log(name);
        //BESCHREIBUNG
        let description = document.createElement("p");
        description.innerHTML = localStorage.getItem("artikel_description" + index);
        document.getElementById("div" + index)?.appendChild(description);
        console.log(description);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        document.getElementById("div" + index)?.appendChild(price);
        console.log(price);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        document.getElementById("div" + index)?.appendChild(kaufen);
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=trolley.js.map