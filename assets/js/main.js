/* array immagini */
const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]

// selezione immagine attiva
let activeImage = 0

//seleziono immagine dom
const imagesElement = document.querySelector('.slider > .images')

// loop for ciclare immagini
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);

    //innerHTML
    imagesElement.innerHTML += imgElement

}

// select all slides
const slideImages = document.querySelectorAll('.slider > .images > img')
