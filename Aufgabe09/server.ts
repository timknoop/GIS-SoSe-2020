import * as Http from "http";
import * as Url from "url";

//mongodb+srv://timknp:<password>@timknp.wm48n.mongodb.net/<dbname>?retryWrites=true&w=majority


export namespace A09Server {
 
    console.log("Starting server");

    let port: number = Number(process.env.PORT);

    if (!port)
    port = 8100;
    
    let server: Http.Server = Http.createServer();
  
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    
    server.listen(port);


    function handleListen(): void {
    console.log("Listening");
  }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;
      if (path == "/html") {
        for (let key in url.query) {
          _response.write(key + ": " + url.query[key] + "<br/>");
        }
      }
      else if (path == "/json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
      }
    }
    _response.end();
  }
}