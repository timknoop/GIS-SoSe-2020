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
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function getButtonHandler() {
        //formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        //let query: URLSearchParams = new URLSearchParams(<any>formData);
        //url = url + "?" + query.toString();
        let response = await fetch(url);
        let resp2 = await response.text();
        document.getElementById("output").innerHTML = resp2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map