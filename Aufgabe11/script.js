"use strict";
var Aufgabe11;
(function (Aufgabe11) {
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
        console.log(response);
        let responseText = await response.text();
        document.getElementById("output").innerHTML = responseText;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map