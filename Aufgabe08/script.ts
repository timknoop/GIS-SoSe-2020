namespace A08Client {
    
    let submitBut: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitBut");
    submitBut.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://timgissose2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        
        let response: Response = await fetch(url);
        let reply: string = await response.url;

        console.log(reply);

        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
    
}