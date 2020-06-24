namespace Aufgabe08 {
    
    let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement> document.getElementById("htmlBut");
    buttonActionHtml.addEventListener("click", handleClickHtml);

    let submitBut: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonBut");
    submitBut.addEventListener("click", communicate);

    async function handleClickHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let serverURL: string = "https://timgissose2020.herokuapp.com";
        serverURL += "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let response: Response = await fetch(serverURL);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    
    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();        
        console.log(responseText);
    }
}