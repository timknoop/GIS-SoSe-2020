namespace Abgabe {
    let delButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("deleteButton"));
    delButton.addEventListener("click", deleteButtonHandler);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("request"));
    getButton.addEventListener("click", requestButtonHandler);
    let shipButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("ship"));
    shipButton.addEventListener("click", shipButtonHandler);

    async function deleteButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/deleteAll";
        await fetch(url);
        location.reload();
    }

    async function requestButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }

    async function shipButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/update";
        await fetch(url);
        location.reload();
    }
}