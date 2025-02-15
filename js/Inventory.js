const cars = [
    {
        title: "TOYOTA 4RUNNER LIMITED NIGHTSHADE",
        price: "$32,000",
        down: "$6,000",
        cash: "$30,900",
        year: "2019",
        mileage: "113.000 miles",
        description: "TÍTULO LIMPIO  PERFECTA PARA LA FAMILIA  PANTALLA  CÁMARA DE RETROCESO   ASIENTOS DE CUERO  QUEMACOCO  LLANTAS 90%  A/C FRÍO Y CALIENTE  RIN DE LUJO IMPECABLE",
        make: "Toyota",
        images: [
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (1).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (2).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (3).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (4).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (5).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (6).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (7).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (8).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (9).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (10).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (11).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (12).jpeg",
            "imagenes/Suvs/TOYOTA 4RUNNER LIMITED NIGHTSHADE 4x4 2019 (13).jpeg"
        ]
    },
    {
        title: "HINO 2018 268 26 FT",
        price: "$37.999",
        year: "2021",
        mileage: "180.000 miles",
        make: "Trucks",
        description: "TÍTULO LIMPIO PERFECTO PARA EL TRANSPORTE LLANTAS NUEVAS LIFT GATE DE ALUMINIO A/C FRÍO Y CALIENTE 1 SOLO DUEÑO FRENO DE AIRE ASIENTOS DE CUERO ALLISON TRASMISSION  MOTOR TOYOTA 7.6L SE PUEDES FINANCIAR ",
        images: [
            "imagenes/Trucks/HINO 2018 268 26 FT (1).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (2).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (3).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (4).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (5).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (6).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (7).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (8).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (9).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (10).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (11).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (12).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (13).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (14).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (15).jpeg",
            "imagenes/Trucks/HINO 2018 268 26 FT (16).jpeg"
        ]
    },
    {
        title: "HINO 2020 268 26 FT",
        price: "$39,999",
        year: "2020 ",
        mileage: "200.000 miles",
        make: "Trucks",
        description: "TÍTULO LIMPIO PERFECTO PARA EL TRANSPORTE LLANTAS NUEVAS LIFT GATE DE ALUMINIO A/C FRÍO Y CALIENTE  1 SOLO DUEÑO FRENO DE AIRE ASIENTOS DE CUERO ALLISON TRASMISSION  MOTOR TOYOTA 7.6LSE PUEDES FINANCIAR  ",
        images: [
            "imagenes/Trucks/HINO 2020 268 26 FT (1).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (2).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (3).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (4).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (5).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (6).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (7).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (8).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (9).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (10).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (11).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (12).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (13).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (14).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (15).jpeg",
            "imagenes/Trucks/HINO 2020 268 26 FT (16).jpeg"
        ]
    },
    // Más carros aquí
];

const itemsPerPage = 12;
let currentPage = 1;

function renderCars(page, filteredCars = cars) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const carsToShow = filteredCars.slice(start, end);

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

    document.getElementById("carModalLabel").textContent = car.title;

    // Mostrar datos del carro en el modal
    document.getElementById("car-price").textContent = car.price;
    document.getElementById("car-year").textContent = car.year;
    document.getElementById("car-mileage").textContent = car.mileage;
    document.getElementById("car-description").textContent = car.description;
    document.getElementById("car-down").textContent = car.down || 'N/A';
    document.getElementById("car-cash").textContent = car.cash || 'N/A';
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

function filterCars() {
    const selectedMakes = Array.from(document.querySelectorAll('input[name="make"]:checked')).map(cb => cb.value);
    const filteredCars = cars.filter(car => selectedMakes.length === 0 || selectedMakes.includes(car.make));
    renderCars(1, filteredCars);
}

document.querySelectorAll('input[name="make"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterCars);
});


// Renderizar la primera página al cargar
renderCars(1);

document.getElementById('legal-button').addEventListener('click', function () {
    const legalContent = document.getElementById('legal-content');
    legalContent.classList.toggle('show');
});