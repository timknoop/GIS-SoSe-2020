namespace Aufgabe11 {
    let formData: FormData;
    let sendButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("input"));
    sendButton.addEventListener("click", sendButtonHandler);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("request"));
    getButton.addEventListener("click", getButtonHandler);

    async function sendButtonHandler(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/input";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        await fetch(url);
    }
    async function getButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        console.log(response);
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }
}