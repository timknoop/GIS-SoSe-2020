"use strict";
var Prüfung;
(function (Prüfung) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Prüfung.artikel = await JSON.parse(JSON.stringify(jsonArray));
        Prüfung.createArtikel();
    }
})(Prüfung || (Prüfung = {}));
//# sourceMappingURL=scriptdata.js.map