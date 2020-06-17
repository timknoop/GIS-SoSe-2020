import * as Http from "http";

export namespace A08Server {
    //Konsolenausgabe
  console.log("Starting server");
    //Variable port + Zuweisung
  let port: number = Number(process.env.PORT);
    //Überprüfung port + ggf. Festlegung
  if (!port)
    port = 8100;
    //Erstellung Variable server
  let server: Http.Server = Http.createServer();
    //Handler wird hinzugefügt
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
    //Server "hört" auf port, für Anfragen
  server.listen(port);

    //Konsolenausgabe
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}