"use strict";
var Prüfung;
(function (Prüfung) {
    function createArtikel() {
        for (let i = 0; i < Prüfung.artikel.length; i++) {
            if (Prüfung.artikel[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = Prüfung.artikel[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = Prüfung.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = Prüfung.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Prüfung.artikel[i].preis.toString());
        }
    }
    Prüfung.createArtikel = createArtikel;
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
        cartArtikel.push(Prüfung.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Prüfung.artikel[indexNr].img);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Prüfung.artikel[indexNr].name);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Prüfung.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Prüfung.handleTrolley = handleTrolley;
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
    //FORM
    let formData;
    let sendButton = document.getElementById("input");
    sendButton.addEventListener("click", inputButtonHandler);
    let getButton = document.getElementById("request");
    getButton.addEventListener("click", requestButtonHandler);
    async function inputButtonHandler() {
        formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        url += "/input";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        await fetch(url);
    }
    async function requestButtonHandler() {
        let url = "https://timgissose2020.herokuapp.com";
        url += "/request";
        let response = await (fetch(url));
        let responseText = await response.text();
        document.getElementById("output").innerHTML = responseText;
    }
})(Prüfung || (Prüfung = {}));
//# sourceMappingURL=script.js.map