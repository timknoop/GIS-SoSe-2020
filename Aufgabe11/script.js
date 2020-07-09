"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let sendButton = document.getElementById("send");
    sendButton.addEventListener("click", sendButtonHandler);
    let getButton = document.getElementById("get");
    getButton.addEventListener("click", getButtonHandler);
    async function sendButtonHandler() {
        formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        url += "/send";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        await fetch(url);
    }
    async function getButtonHandler() {
        let url = "https://timgissose2020.herokuapp.com";
        url += "/get";
        let response = await (fetch(url));
        console.log(response);
        let responseText = await response.json();
        let ausgabe = document.getElementById("ausgabe");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }
    console.log("Fertig");
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map