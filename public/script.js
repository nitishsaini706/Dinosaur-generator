console.log("script.js loaded");


document.querySelector('#btnload').addEventListener('click' , ()=>
{
    getDinoName();
    getDinoImage();
});


async function getDinoName(){
    const response = await fetch('/dinoName');
    const data = await response.json();
    let dinoName = data[0].join(" ");
    console.log(dinoName);
    document.querySelector('#dinoName').textContent = dinoName;
}

async function getDinoImage(){
    const response = await fetch('/dinoImage');
    const data = await response.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl;
    let dinoAlt= dinoImage.name;
    console.log(dinoImageUrl);

    if(document.querySelector('#dinoImage') !==null)
    {
        document.querySelector('#dinoImage').remove();
    }

    let img = document.createElement('img');
    img.id= 'dinoImage';
    img.src= dinoImageUrl;
    img.alt = dinoAlt;
    document.querySelector('.generator').appendChild(img);

}

