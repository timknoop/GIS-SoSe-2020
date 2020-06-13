"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let length = parseInt(localStorage.getItem("anzahlArtikel"));
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
        //NAME
        let name = document.createElement("p");
        name.innerHTML = localStorage.getItem("artikel_name" + index);
        newDiv.appendChild(name);
        console.log(name);
        //BESCHREIBUNG
        let description = document.createElement("p");
        description.innerHTML = localStorage.getItem("artikel_description" + index);
        newDiv.appendChild(description);
        console.log(description);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=trolley.js.map