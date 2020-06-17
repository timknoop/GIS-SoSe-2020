"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    //Konsolenausgabe
    console.log("Starting server");
    //Variable port + Zuweisung
    let port = Number(process.env.PORT);
    //Überprüfung port + ggf. Festlegung
    if (!port)
        port = 8100;
    //Erstellung Variable server
    let server = Http.createServer();
    //Handler wird hinzugefügt
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server "hört" auf port, für Anfragen
    server.listen(port);
    //Konsolenausgabe
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsolenausgabe
        console.log("I hear voices!");
        //Parameter Reponse-Header
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe URL
        _response.write(_request.url);
        //Reponse Ende
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map