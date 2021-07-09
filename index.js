if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express'); //importing express
const app = express(); //creating express app
const port = 3000; // which port to load local website
const fetch = require('node-fetch');
// it specifies app to use this public folder
app.use(express.static('public'));

// this tells our server to listen to 3000 port and serve our website 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

const api_key = process.env.API_KEY;
// we're using get function as we're only getting data from api and using async 
//we dont know how much time api will take to return name 
app.get("/dinoname", async (request, response) => {
    //run code
    const fetchApi = await fetch(
        "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        method: "GET",
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': "alexnormand-dino-ipsum.p.rapidapi.com",
        },
    }

    );

    //return pormise in json format from api
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
});

    app.get("/dinoImage", async (request, response) => {
        //run code
        const fetchApi = await fetch(
            "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
            method: "GET",
            headers: {
                "x-rapidapi-key": api_key ,
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
            },
        });

    

    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
});

