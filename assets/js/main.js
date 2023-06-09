/* array immagini */
const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

// selezione immagine attiva
let activeImage = 0

//seleziono immagine dom
const imagesElement = document.querySelector('.slider > .images')

// loop for ciclare immagini
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    let imgClasses = "img-fluid";

    if (i === activeImage) {
        imgClasses += " active";
    }

    const imgElement = `<img class="${imgClasses}" src="${imgSrc}" alt="">`
    console.log(imgElement);

    //innerHTML
    imagesElement.innerHTML += imgElement

}

// seleziono le slides
const slideImages = document.querySelectorAll('.slider > .images > img');

// click next
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
    console.log('cliccato next')
    // selezione slide
    const currentSlide = slideImages[activeImage]
    console.log(currentSlide);
    // rimuovo active
    currentSlide.classList.remove('active');
    // incremento
    activeImage++;
    //loop
    if (activeImage >= slideImages.length) {
        activeImage = 0;
    }
    // seleziono prossima slide
    const nextImage = slideImages[activeImage]
    // aggiungo active
    console.log(nextImage);
    nextImage.classList.add('active');
    
})

// click prev
const prevEl = document.querySelector('.prev')
prevEl.addEventListener('click', function () {
    console.log('cliccato prev')
    // selezione slide
    const currentSlide = slideImages[activeImage]
    console.log(currentSlide);
    // rimuovo active
    currentSlide.classList.remove('active');
    // decremento
    activeImage--;
    //loop
    if (activeImage < 0) {
        activeImage = slideImages.length - 1;
    }
    // select the next slide
    const nextImage = slideImages[activeImage]
    // aggiungo active
    console.log(nextImage);
    nextImage.classList.add('active');
    
})
