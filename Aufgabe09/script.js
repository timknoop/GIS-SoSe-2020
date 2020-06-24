"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let buttonActionHtml = document.getElementById("htmlBut");
    buttonActionHtml.addEventListener("click", handleClickHtml);
    let submitBut = document.getElementById("submitBut");
    submitBut.addEventListener("click", communicate);
    async function handleClickHtml() {
        let formData = new FormData(document.forms[0]);
        let serverURL = "https://timgissose2020.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let response = await fetch(serverURL);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map