
// axios.get("data.json").then((resp) =>{ 

//     const cards = resp.data;
//     // creo un ciclo foreach che itera sull'array ricevuto per prendere i titoli di cui ho bisogno
//     cards.forEach(card => {
//         area.innerHTML += 
//             `<div class="col">
//                 <div id="img-zone" class="img-area"><img src="${card.url}" alt="Esempio di immagine"></div>
//                 <div id="title-zone" class="text-area">${card.title}</div>
//             </div>`;
//     });
// });




// prendo gli elementi da html
const area = document.querySelector(".container-foto");
// prendo il bottone di chiusura del popup e gli setto il funzionamento
// prendo anche l'overlay per assegnarli l' evento di chiusura
const btnPopUpClose = document.getElementById("bnt-close-popup");
const overlayElem = document.getElementById("overlay");
const imgInsert = document.getElementById("img-insert-popUp");



axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) =>{ 

    const cards = resp.data;
    // creo un ciclo foreach che itera sull'array ricevuto per prendere i titoli di cui ho bisogno
    cards.forEach(card => {
      
        area.innerHTML += 
            `<div class="col">
                <img class="pin" src="./img/pin.svg" alt="">
                <div id="img-zone" class="img-area">
                    <img src="${card.url}" alt="El Barto" class="">
                </div>
                <div id="title-zone" class="text-area">${card.title}</div>
            </div>`; 
    });
    
     
    const cols = document.querySelectorAll(".col");
    cols.forEach((curCol) => {
        curCol.addEventListener('click', () => {
            overlayElem.style.display = 'flex';
            const img = curCol.querySelector(".img-area img");
            imgInsert.src = img.src;
    });
    });

});


btnPopUpClose.addEventListener('click', () => {
    overlayElem.style.display = 'none';
});
// creo evento che cliccando su una card apre l'overlay



   
 




    

