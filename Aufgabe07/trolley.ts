namespace Aufgabe07 {

    let length: number = parseInt(localStorage.getItem("anzahlArtikel")!);

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

            //NAME
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = localStorage.getItem("artikel_name" + index)!;
            newDiv.appendChild(name);
            console.log(name);

            //BESCHREIBUNG
            let description: HTMLParagraphElement = document.createElement("p");
            description.innerHTML = localStorage.getItem("artikel_description" + index)!;
            newDiv.appendChild(description);
            console.log(description);

            //PREIS
            let price: HTMLParagraphElement = document.createElement("p");
            price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€"!;
            newDiv.setAttribute("preis", price.innerHTML);
            newDiv.appendChild(price);
            console.log(price);

            //BUTTON
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Löschen";
            newDiv.appendChild(kaufen);
    }
}