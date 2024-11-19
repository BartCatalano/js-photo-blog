// prendo gli elementi da html
const cardTotal = document.getElementById("card-total");
const imgZone = document.getElementById("img-zone");
const titleZone = document.getElementById("title-zone");

// USO AXIOS PER PRENDERE IL LINK
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) =>{ 
    console.log(resp.data);
    
});

for(let i = 0; i < 6 ; i++){
    
} 