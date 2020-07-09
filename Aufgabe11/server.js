"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//mongodb+srv://timknp:<password>@timknp.wm48n.mongodb.net/<dbname>?retryWrites=true&w=majority
//https://mongodbnetbrowser.herokuapp.com/?u=timknp&p=pw123456&a=timknp.wm48n.mongodb.net&n=Test&c=Students
var A11Server;
(function (A11Server) {
    let mongoDaten;
    let databaseUrl;
    databaseUrl = "mongodb+srv://timknp:pw123456@timknp.wm48n.mongodb.net/Test?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoDaten = mongoClient.db("Test").collection("Students");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/input") {
                mongoDaten.insertOne(url.query);
            }
            else if (url.pathname == "/request") {
                _response.write(JSON.stringify(await mongoDaten.find().toArray()));
            }
        }
        _response.end();
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map