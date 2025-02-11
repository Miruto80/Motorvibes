let currentImageIndex = 0;
const images = [
    "imagenes/Last adds/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019.jpeg",
    "imagenes/Last adds/HINO 2018 268 26 FT.jpeg"
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
