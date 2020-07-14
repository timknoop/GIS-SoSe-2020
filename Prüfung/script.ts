namespace Prüfung {

export function createArtikel(): void {
for (let i: number = 0; i < artikel.length; i++) {

    if (artikel[i].category == 1) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div" + i;
    document.getElementById("flex1")?.appendChild(newDiv); 
    newDiv.setAttribute("index", i.toString());
    }

    //IMG
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikel[i].img;
    document.getElementById("div" + i)?.appendChild(imgElement);

    //NAME
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikel[i].name;
    document.getElementById("div" + i)?.appendChild(name);

    //PREIS
    let price: HTMLElement = document.createElement("p");
    price.innerHTML = artikel[i].preis + "€";
    document.getElementById("div" + i)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    kaufen.addEventListener("click", handleTrolley);
    document.getElementById("div" + i)?.appendChild(kaufen);
    kaufen.setAttribute("preis", artikel[i].preis.toString());
}
}

//Einkaufswagen
let summe: number = 0;
let count: number = 0;
let artikelCounter: number = 0;
let blasenDiv: HTMLDivElement = document.createElement("div");

let cartArtikel: Artikel[] = [];

export function handleTrolley(_event: Event): void {
    
    if (artikelCounter >= 0) {
        document.getElementById("warencounter")?.appendChild(blasenDiv);
    }

    artikelCounter++;
    blasenDiv.innerHTML = artikelCounter + "";
 
    if ( (<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
            summe = count + parseInt((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
            count = summe;
        } 
    console.log(summe.toFixed(0));

    let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
    let indexNr: number = parseInt(indexButton);
    
    cartArtikel.push(artikel[indexNr]);
    localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), artikel[indexNr].img);
    localStorage.setItem("artikel_name" + (cartArtikel.length - 1), artikel[indexNr].name);
    localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), artikel[indexNr].preis.toString());
    localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());

}

let allCategory: HTMLAnchorElement = document.createElement("a");
allCategory.id = "all";
allCategory.innerHTML = "Eis";
document.getElementById("eisButton")?.appendChild(allCategory);

let length: number = parseInt(localStorage.getItem("anzahlArtikel")!);
let preis: number = 0;
let gesamtpreis: HTMLParagraphElement = document.createElement("p");

for (let index: number = 0; index <= length - 1; index++) {

            //Div erstellen
            let newDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementById("flexWarenkorb")).appendChild(newDiv);
            newDiv.id = "div" + index;
            console.log("div" + index);

            //IMG
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = localStorage.getItem("artikel_bild" + index)!;
            newDiv.appendChild(imgElement);
            console.log(imgElement);

            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€"!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            console.log(price);
            
            //BUTTON
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
            kaufen.addEventListener("click", handleDelete);
    }


function handleDelete(_event: Event): void {
    let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
    preis = preis - parseFloat(preisString);
    gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
    ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }

//FORM
let formData: FormData;
let sendButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("input"));
sendButton.addEventListener("click", inputButtonHandler);
let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("request"));
getButton.addEventListener("click", requestButtonHandler);

async function inputButtonHandler(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/input";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        await fetch(url);
    }
async function requestButtonHandler(): Promise<void> {
        let url: string = "https://timgissose2020.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }
}

