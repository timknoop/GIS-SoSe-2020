namespace Abgabe {
    let delButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("deleteButton"));
    delButton.addEventListener("click", deleteButtonHandler);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("request"));
    getButton.addEventListener("click", requestButtonHandler);
    let statsButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("update"));
    statsButton.addEventListener("click", statsButtonHandler);

    async function deleteButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/deleteAll";
        await fetch(url);
    }

    async function requestButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }

    async function statsButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/update";
        await fetch(url);
    }
}