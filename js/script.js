const arrayImg = [
    "https://wallpapers.com/images/hd/one-piece-pictures-wum4vxcsqo80mbtn.jpg",

    "https://img.anime2you.de/2020/04/op-manga.jpg",

    "https://wallpapers.com/images/hd/straw-hat-pirates-io2otkus2dxjczud.jpg",

    "https://i.pinimg.com/1200x/13/53/a4/1353a43babef16211ec4e3c003d2ab39.jpg",

    "https://wallpapers.com/images/hd/one-piece-pictures-0ubzj7u8rx805ydb.jpg",

    "https://wallpapers.com/images/hd/one-piece-pictures-a490z6ais4fwsurq.jpg",

  ];
  



// prendo gli elementi da html
const cardTotal = document.getElementById("card-total");
const imgZone = document.getElementById("img-zone");
const titleZone = document.getElementById("title-zone");


// USO AXIOS PER PRENDERE IL LINK

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) =>{ 
    const arrayDati = [];

    // destrutturo array ricevuto per prendere le chiavi che mi servono
    const key = resp.data;

    // creo un ciclo foreach che itera sull'array ricevuto per prendere i titoli di cui ho bisogno
    key.forEach(data => {
       let element = data.title;
      titleZone.innerHTML = element;
    });
      //   creo ciclo for per le immagini
    for (let i = 0; i < 6; i++) {
        const elementImg = arrayImg[i];
    imgZone.innerHTML = `<img src="${elementImg}" alt="Esempio di immagine">`
    
    }

    });

   
 




    

