"use strict";
var Abgabe;
(function (Abgabe) {
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
        //NAME
        let name = document.createElement("p");
        name.innerHTML = localStorage.getItem("artikel_name" + index);
        newDiv.appendChild(name);
        console.log(name);
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
        kaufen.addEventListener("click", handleDelete);
        //Gesamtpreis berechnen
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById("warenkorbWert")?.appendChild(gesamtpreis);
    }
    let delButton = document.getElementById("delButton");
    delButton.addEventListener("click", handleDeleteAll);
    function handleDelete(_event) {
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
    function handleDeleteAll(_event) {
        for (let index = 0; index <= length; index++) {
            document.getElementById("div" + index).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
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
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=trolley.js.map