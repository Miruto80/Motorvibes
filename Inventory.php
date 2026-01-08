<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car inventory</title>
    <link rel="shortcut icon" href="imagenes/Comunes/logo.webp" type="image/x-icon">
    <link rel="stylesheet" href="css/Inventory.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.js"></script>
    <script src="https://kit.fontawesome.com/a994ffc8cf.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="top-bar" id="top-bar">
        <div class="top-bar-content">
            <span class="contact-info"><i class="fa-solid fa-phone"> Call us:</i><a href="tel:682-240-7569"> 682-240-7569</a></span>
            <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=61572580624185" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/motorvibesllc/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-body">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.php">
            <img src="imagenes/Comunes/logo.webp" alt="Logo Taekyon" width="150" height="120" class="d-inline-block align-text-top">
          </a>
          <a class="navbar-brand fs-4 d-none d-sm-inline d-lg-inline fs-lg-2" href="#">
            <b>Your Journey Begins Here</b>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.php" id="Home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Pre-approval.php">
                  Pre-approval
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
            <form class="d-flex ms-3" role="search" onsubmit="event.preventDefault(); handleSearch();">
            <input class="form-control me-2" type="search" placeholder="Search cars..." aria-label="Search" id="carSearchInput">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
      </nav>
    </header>

    <!-- Car Inventory Section -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-2 d-none d-md-block" id="filters" style="padding-right: 10px;">
                <h5>Filters</h5>
                <form>
                    <h6>Make</h6>
                    <label><input type="checkbox" name="make" value="Honda"> Honda</label><br>
                    <label><input type="checkbox" name="make" value="Nissan"> Nissan</label><br>
                    <label><input type="checkbox" name="make" value="Toyota"> Toyota</label><br>
                    <label><input type="checkbox" name="make" value="Fiat"> Fiat</label><br>
                    <label><input type="checkbox" name="make" value="Ford"> Ford</label><br>
                    <label><input type="checkbox" name="make" value="Chevrolet"> Chevrolet</label><br>
                    <label><input type="checkbox" name="make" value="Trucks"> Trucks</label><br>
                    <label><input type="checkbox" name="make" value="Hyundai"> Hyundai</label><br>
                    <label><input type="checkbox" name="make" value="Kia"> Kia</label><br>
                    <label><input type="checkbox" name="make" value="Jeep"> Jeep</label><br>
                    <label><input type="checkbox" name="make" value="Mazda"> Mazda</label><br>
                    <label><input type="checkbox" name="make" value="Ram"> Ram</label><br>
                    <label><input type="checkbox" name="make" value="Subaru"> Subaru</label><br>
                    <label><input type="checkbox" name="make" value="Dodge"> Dodge</label><br>
                    <label><input type="checkbox" name="make" value="Mitsubishi"> Mitsubishi</label><br>
                    <label><input type="checkbox" name="make" value="GMC"> GMC</label><br>
                    <label><input type="checkbox" name="make" value="Mercedes"> Mercedes</label><br>
                    <label><input type="checkbox" name="make" value="BMW"> BMW</label><br>
                    <label><input type="checkbox" name="make" value="Freightliner"> Freightliner</label><br>
                </form>
            </div>
            

            <div class="col-md-10" style="padding-left: 10px;">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <h5 class="mb-3" id="results-count">Showing 12 results</h5>
                    <nav aria-label="Page navigation">
                        <ul class="pagination mb-3" id="pagination"></ul>
                    </nav>
                </div>
            
                <div class="row g-2" id="car-list">
                    <!-- Aquí se generarán los autos dinámicamente -->
                </div>
            </div>
            
            <!-- Modal para la galería de imágenes y datos del carro -->
            <div class="modal fade" id="carModal" tabindex="-1" aria-labelledby="carModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="carModalLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">✖</button>
                        </div>
                        <div class="modal-body d-flex">
                            <!-- Carrusel de imágenes (lado izquierdo) -->
                            <div class="w-50 pe-3">
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner" id="carousel-inner"></div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </div>
            
                            <!-- Datos del carro (lado derecho) -->
                            <div class="w-50 ml-3">
                                <p><strong>Price:</strong> <span id="car-price"></span></p>
                                <p><strong>Down:</strong> <span id="car-down"></span></p>
                                <p><strong>Cash:</strong> <span id="car-cash"></span></p>
                                <p><strong>Year:</strong> <span id="car-year"></span></p>
                                <p><strong>Mileage:</strong> <span id="car-mileage"></span></p>
                                <p id="descripcion"><strong>Description:</strong> <span id="car-description"></span></p>
                                <a href="Pre-approval.php" class="btn btn-success w-100">Get Pre-Approval</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer>
        <h4>Social Media</h4>
        <div class="redes-sociales" id="contact">
            <a target="_blank" href="https://www.instagram.com/motorvibesllc/">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61566474924038&mibextid=wwXIfr">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <i><i class="fa-solid fa-phone"></i><a href="tel:682-240-7569"> 682-240-7569 </a></i>
            <i>Motorvibesllc@hotmail.com <i class="fa-solid fa-envelope"></i></i>
    
        </div>
        
        <div class="legal">
            <button id="legal-button">
                Legal <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div id="legal-content" class="hidden">
                <p>&copy; Motorvibes 2025</p>
                <p>All rights reserved. The images are used with permission.</p>
            </div>
        </div>
    </footer>

    <script src="js/Inventory.js?v=<?= filemtime('js/Inventory.js') ?>"></script>
</body>
</html>