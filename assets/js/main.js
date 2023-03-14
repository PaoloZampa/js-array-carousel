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
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
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
    if (activeImage >= slideImages.length) {
        activeImage = 0;
    }
    // selezione slide
    const currentSlide = slideImages[activeImage]
    console.log(currentSlide);
    // rimuovo active
    currentSlide.classList.remove('active');
    // incremento
    activeImage++;
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
    if (activeImage < 0) {
        activeImage = slideImages.length - 1;
    }
    // selezione slide
    const currentSlide = slideImages[activeImage]
    console.log(currentSlide);
    // rimuovo active
    currentSlide.classList.remove('active');
    // decremento
    activeImage--;
    // select the next slide
    const nextImage = slideImages[activeImage]
    // aggiungo active
    console.log(nextImage);
    nextImage.classList.add('active');

})
