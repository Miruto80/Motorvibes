const cars = [
    {
        title: "2020 Honda CR-V",
        price: "$25,000",
        year: "2020",
        mileage: "30,000 miles",
        description: "A reliable and spacious SUV with great fuel efficiency.",
        images: [
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (1).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (2).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (3).jpeg"
        ]
    },
    {
        title: "2021 Toyota RAV4",
        price: "$28,000",
        year: "2021",
        mileage: "20,000 miles",
        description: "A popular compact SUV with advanced safety features.",
        images: [
            "imagenes/Trucks/HINO 2018 268 26 FT (1).jpeg",
            "imagenes/Suvs/toyota-rav4-2.jpg",
            "imagenes/Suvs/toyota-rav4-3.jpg"
        ]
    },
    // Más carros aquí
];

const itemsPerPage = 12;
let currentPage = 1;

function renderCars(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const carsToShow = cars.slice(start, end);

    const carList = document.getElementById("car-list");
    carList.innerHTML = ""; // Limpiar los autos anteriores

    carsToShow.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.className = "col-md-4 mb-4";
        carDiv.innerHTML = `
            <div class="card" style="height: 100%;">
                <img src="${car.images[0]}" class="card-img-top" alt="${car.title}" title="Clik in the image to see more" data-bs-toggle="modal" data-bs-target="#carModal" onclick="openModal(${cars.indexOf(car)})">
                <div class="card-body">
                    <h5 class="card-title">${car.title}</h5>
                    <p class="card-text">Price: ${car.price}</p>
                    <a href="pre-approval.html?car=${encodeURIComponent(car.title)}" class="btn btn-primary w-100">Get Pre-Approval</a>
                </div>
            </div>
        `;
        carList.appendChild(carDiv);
    });

    updatePagination();
}

function openModal(carIndex) {
    const car = cars[carIndex];
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = ""; // Limpiar las imágenes anteriores en el modal

    car.images.forEach((img, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = `carousel-item ${index === 0 ? "active" : ""}`;
        itemDiv.innerHTML = `<img src="${img}" class="d-block w-100" alt="${car.title}">`;
        carouselInner.appendChild(itemDiv);
    });

    // Mostrar datos del carro en el modal
    document.getElementById("car-price").textContent = car.price;
    document.getElementById("car-year").textContent = car.year;
    document.getElementById("car-mileage").textContent = car.mileage;
    document.getElementById("car-description").textContent = car.description;
}

function updatePagination() {
    const totalPages = Math.ceil(cars.length / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = ""; // Limpiar la paginación anterior

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
        pageItem.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>`;
        pagination.appendChild(pageItem);
    }
}

function goToPage(page) {
    currentPage = page;
    renderCars(currentPage);
}

// Renderizar la primera página al cargar
renderCars(currentPage);