namespace Aufgabe07 {
//Interface

export function createArtikel(): void {
for (let i: number = 0; i < artikel.length; i++) {

    if (artikel[i].category == 1) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div" + i;
    document.getElementById("flex1")?.appendChild(newDiv); 
    newDiv.setAttribute("index", i.toString());
    }

    if (artikel[i].category == 2) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("flex2")?.appendChild(newDiv);
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

    //DESCRIPTION
    let description: HTMLParagraphElement = document.createElement("p");
    description.innerHTML = artikel[i].description;
    document.getElementById("div" + i)?.appendChild(description);

    //PREIS
    let price: HTMLElement = document.createElement("p");
    price.innerHTML = artikel[i].preis + "€";
    document.getElementById("div" + i)?.appendChild(price);

    //BUY
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Buy";
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
    localStorage.setItem("artikel_description" + (cartArtikel.length - 1), artikel[indexNr].description);
    localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), artikel[indexNr].preis.toString());
    localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());

    
}

let allCategory: HTMLAnchorElement = document.createElement("a");
allCategory.id = "all";
allCategory.innerHTML = "All";
allCategory.addEventListener("click", handleKategorie);
document.getElementById("allButton")?.appendChild(allCategory);

let menCategory: HTMLAnchorElement = document.createElement("a");
menCategory.id = "men";
menCategory.innerHTML = "Men";
menCategory.addEventListener("click", handleKategorie);
document.getElementById("menButton")?.appendChild(menCategory);

let womenCategory: HTMLAnchorElement = document.createElement("a");
womenCategory.id = "women";
womenCategory.innerHTML = "Women";
womenCategory.addEventListener("click", handleKategorie);
document.getElementById("womenButton")?.appendChild(womenCategory);

function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "all") {
            (<HTMLDivElement>document.getElementById("menBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("womenBlock")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "men") {
            (<HTMLDivElement>document.getElementById("menBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("womenBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "women") {
            (<HTMLDivElement>document.getElementById("menBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("womenBlock")).style.display = "block";
        }
}

}

