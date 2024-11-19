// prendo gli elementi da html
const area = document.querySelector(".container-foto");

// USO AXIOS PER PRENDERE IL LINK
axios.get("data.json").then((resp) =>{ 

    const cards = resp.data;
    // creo un ciclo foreach che itera sull'array ricevuto per prendere i titoli di cui ho bisogno
    cards.forEach(card => {
        area.innerHTML += 
            `<div class="col">
                <div id="img-zone" class="img-area"><img src="${card.url}" alt="Esempio di immagine"></div>
                <div id="title-zone" class="text-area">${card.title}</div>
            </div>`;
    });
});

   
 




    

