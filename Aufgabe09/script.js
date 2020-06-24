"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let buttonActionHtml = document.getElementById("htmlBut");
    buttonActionHtml.addEventListener("click", handleClickHtml);
    let submitBut = document.getElementById("jsonBut");
    submitBut.addEventListener("click", handleClickJson);
    async function handleClickHtml() {
        formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function handleClickJson() {
        formData = new FormData(document.forms[0]);
        let url = "https://timgissose2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map