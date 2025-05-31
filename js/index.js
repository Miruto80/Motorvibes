let currentImageIndex = 0;
const images = [
    "imagenes/Last adds/Last add (1).jpeg",
    "imagenes/Last adds/Last add (2).jpeg",
    "imagenes/Last adds/Last add (3).jpeg",
    "imagenes/Last adds/Last add (4).jpeg"
];
const carouselBg = document.getElementById("carousel-bg");

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselBg.src = images[currentImageIndex];
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselBg.src = images[currentImageIndex];
}


document.getElementById('legal-button').addEventListener('click', function () {
    const legalContent = document.getElementById('legal-content');
    legalContent.classList.toggle('show');
});
var fecha = new Date();
var año = fecha.getFullYear();
let copy = document.getElementById("Copy");

copy.innerHTML = "&copy; Motorvibes " + año;

