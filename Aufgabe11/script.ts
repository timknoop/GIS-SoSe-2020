namespace Aufgabe11 {
    let formData: FormData;
    let sendButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("send"));
    sendButton.addEventListener("click", sendButtonHandler);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("get"));
    getButton.addEventListener("click", getButtonHandler);

    async function sendButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/send";

        let response: Response = await(fetch(url));
        console.log(response);
        let responseText: string = await response.json();

        let ausgabe: HTMLElement = document.getElementById("ausgabe")!;
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }

    async function getButtonHandler(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/get";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        await fetch(url);
    }
    console.log("Ferig");
}