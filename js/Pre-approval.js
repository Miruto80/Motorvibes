function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const carName = getQueryParam('car');
  if (carName) {
    document.getElementById('carType').value = carName;
  }


      // Validation functions
    // Validación para el campo phone
    
    // Validación para el campo firstname
    $("#firstname").on("keypress", function (e) {
      validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
    });
    
    $("#firstname").on("keyup", function () {
      validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $(this), $("#sfirstname"), "Only letters between 3 and 30 characters");
    });
    
    // Validación para el campo lastname
    $("#lastname").on("keypress", function (e) {
      validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
    });
    
    $("#lastname").on("keyup", function () {
      validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $(this), $("#slastname"), "Only letters between 3 and 30 characters");
    });
    $("#phone").on("keypress", function (e) {
        validarkeypress(/^[0-9-\b]*$/, e);
    });
    
    $("#phone").on("keyup", function () {
        validarkeyup(/^[0-9]{10,11}$/, $(this), $("#sphone"), "The format must be between 10 to 11 digits");
    });

// Validación para el campo zip (5 dígitos)
$("#Zip").on("keypress", function (e) {
    validarkeypress(/^[0-9\b]*$/, e);
});

$("#Zip").on("keyup", function () {
    validarkeyup(/^[0-9]{5}$/, $(this), $("#sZip"), "The Zip code must be exactly 5 digits");
});

// Validación para el campo license (letras y números entre 5 y 15 caracteres)
$("#license").on("keypress", function (e) {
    validarkeypress(/^[A-Za-z0-9\b]*$/, e);
});

$("#license").on("keyup", function () {
    validarkeyup(/^[A-Za-z0-9]{5,15}$/, $(this), $("#slicense"), "License must be between 5 and 15 characters");
});
$("#Social").on("input", function () {
    let value = $(this).val().replace(/\D/g, "");  // Elimina todo lo que no sea un número
    if (value.length > 3 && value.length <= 5) {
        value = value.replace(/^(\d{3})(\d{1,2})$/, "$1-$2");
    } else if (value.length > 5) {
        value = value.replace(/^(\d{3})(\d{2})(\d{1,4})$/, "$1-$2-$3");
    }
    $(this).val(value);
});


$("#Social").on("keypress", function (e) {
    validarkeypress(/^[0-9-\b]*$/, e);  // Solo permite números y guiones
});

$("#Social").on("keyup", function () {
    validarkeyup(/^\d{3}-\d{2}-\d{4}$/, $(this), $("#sSocial"), "The format must be XXX-XX-XXXX");
});

$("#homePhone").on("keypress", function (e) {
  validarkeypress(/^[0-9-\b]*$/, e);
});

$("#homePhone").on("keyup", function () {
  validarkeyup(/^[0-9]{10,11}$/, $(this), $("#shomePhone"), "The format must be between 10 to 11 digits");
});
$("#workPhone").on("keypress", function (e) {
  validarkeypress(/^[0-9-\b]*$/, e);
});

$("#workPhone").on("keyup", function () {
  validarkeyup(/^[0-9]{10,11}$/, $(this), $("#sworkPhone"), "The format must be between 10 to 11 digits");
});

//Informacion de empleo

$("#grossIncome").on("keypress", function (e) {
  validarkeypress(/^[0-9-\b]*$/, e);
});

$("#grossIncome").on("keyup", function () {
  validarkeyup(/^[0-9]{2,10}$/, $(this), $("#sgrossIncome"), "Only numbers between 2 and 10");
});

$("#employer").on("keypress", function (e) {
  validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
});

$("#employer").on("keyup", function () {
  validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $(this), $("#semployer"), "Only letters between 3 and 30 characters");
});

$("#occupation").on("keypress", function (e) {
  validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
});

$("#occupation").on("keyup", function () {
  validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,50}$/, $(this), $("#soccupation"), "Only letters between 3 and 50 characters");
});

$("#supervisorName").on("keypress", function (e) {
  validarkeypress(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]*$/, e);
});

$("#supervisorName").on("keyup", function () {
  validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $(this), $("#ssupervisorName"), "Only letters between 3 and 30 characters");
});


$("#supervisorPhone").on("keypress", function (e) {
  validarkeypress(/^[0-9-\b]*$/, e);
});

$("#supervisorPhone").on("keyup", function () {
  validarkeyup(/^[0-9]{10,11}$/, $(this), $("#ssupervisorPhone"), "The format must be between 10 to 11 digits");
});

$("#employmentZip").on("keypress", function (e) {
    validarkeypress(/^[0-9\b]*$/, e);
});

$("#employmentZip").on("keyup", function () {
    validarkeyup(/^[0-9]{5}$/, $(this), $("#semploymentZip"), "The employmentZip code must be exactly 5 digits");
});


// Función de validación del envío
function validarenvio() {
  if (validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $("#firstname"), $("#sfirstname"), "Only letters between 3 and 30 characters") === 0) {
    alert("Error in firstname");
    return false;
  }
  if (validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $("#lastname"), $("#slastname"), "Only letters between 3 and 30 characters") === 0) {
    alert("Error in lastname");
    return false;
  }
  if (validarkeyup(/^[0-9]{10,11}$/, $("#phone"), $("#sphone"), "The format must be between 10 to 11 digits") === 0) {
      alert("Error in phone");
      return false;
  }
    if (validarkeyup(/^[0-9]{5}$/, $("#Zip"), $("#sZip"), "The Zip code must be exactly 5 digits") === 0) {
        alert("Error in Zip");
        return false;
    }
    if (validarkeyup(/^[A-Za-z0-9]{5,15}$/, $("#license"), $("#slicense"), "License must be between 5 and 15 characters") === 0) {
        alert("Error in license");
        return false;
    }
    if (validarkeyup(/^\d{3}-\d{2}-\d{4}$/, $("#Social"), $("#sSocial"), "The format must be XXX-XX-XXXX") == 0) {
        alert("Error in SSN");
        return false;
    }
    if (validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,30}$/, $("#employer"), $("#semployer"), "Only letters between 3 and 30 characters") === 0) {
    alert("Error in employer");
    return false;
  }
    if (validarkeyup(/^[A-Za-z\b\s\u00f1\u00d1\u00E0-\u00FC]{3,50}$/, $("#occupation"), $("#soccupation"), "Only letters between 3 and 50 characters") == 0) {
        alert("Error in occupation");
        return false;
    }

    if (validarkeyup(/^[0-9]{2,10}$/, $("#grossIncome"), $("#sgrossIncome"), "Only numbers between 2 and 10") === 0) {
      alert("Error in grossIncome");
      return false;
  }
    return true;
}

       
       
       function validarkeypress(er, e) {
    key = e.keyCode;
    tecla = String.fromCharCode(key);
    a = er.test(tecla);
    if (!a) {
        e.preventDefault();
    }
}

// Función para validar la entrada después de escribir
function validarkeyup(er, etiqueta, etiquetamensaje, mensaje) {
    a = er.test(etiqueta.val());
    if (a) {
        etiquetamensaje.text("");
        return 1;
    } else {
        etiquetamensaje.text(mensaje);
        return 0;
    }
}

document.getElementById('legal-button').addEventListener('click', function () {
    const legalContent = document.getElementById('legal-content');
    legalContent.classList.toggle('show');
});
