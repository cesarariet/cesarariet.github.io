var puntoMedio = 12;
var movimiento = 0;

var handleClick = () => {
  //reseteo
  movimiento = 0;
  moverLaComa(0);
  // TOMA DE DATOS
  var valor = document.getElementById("numero").value;
  var prefijo = document.getElementById("prefijo").value;
  var [parteEntera, parteDecimal] = valor.toString().split(".");
  var unidad = document.getElementById("unidad").value;
  // POSICION DE LA COMA DEL NUMERO EN LA TABLA
  var posicionComa = puntoMedio - Math.log10(prefijo);
  // COLUMNAS DONDE PONDREMOS LA CANTIDAD DADA
  var columnaOriginal = document
    .getElementById("original")
    .getElementsByTagName("td");
  // COLUMNAS DONDE PONDREMOS LA CANTIDAD EN LA NUEVA UNIDAD
  var columnaNueva = document
    .getElementById("nueva")
    .getElementsByTagName("td");
  // PONER UNIDAD A LOS PREFIJOS

  var columnaPrefijos = document
    .getElementById("guia")
    .getElementsByTagName("td");

  //limpiar columnas y poner unidad a los prefijos de la guia
  var hayUnidadPuesta = columnaPrefijos[0].innerHTML !== "T";
  for (var i = 0; i < columnaOriginal.length; i++) {
    columnaOriginal[i].innerHTML = "";
    if (columnaPrefijos[i].innerHTML !== "-") {
      hayUnidadPuesta
        ? (columnaPrefijos[i].innerHTML =
            columnaPrefijos[i].innerHTML.slice(0, -1) + unidad)
        : (columnaPrefijos[i].innerHTML =
            columnaPrefijos[i].innerHTML + unidad);
    }
  }

  if (
    numeroSePasaALaDerecha(parteDecimal, posicionComa) ||
    numeroSePasaALaIzquierda(parteEntera, posicionComa + 1)
  ) {
    alert("El número no entra en la tabla");
  }

  //IMPRIMIR EL NÚMERO ELEGIDO
  imprimirNumero(columnaOriginal, parteEntera, posicionComa, parteDecimal);
};

var moverLaComa = (lado) => {
  //Cuenta el desplazamiento total
  movimiento = movimiento + lado;
  // TOMA DE DATOS
  var valor = document.getElementById("numero").value;
  var prefijo = document.getElementById("prefijo").value;
  var [parteEntera, parteDecimal] = valor.toString().split(".");
  parteDecimal === undefined ? (parteDecimal = "") : null;
  // POSICION DE LA COMA DEL NUMERO EN LA TABLA
  var posicionComa = puntoMedio - Math.log10(prefijo);
  //Verificar que se puede hacer el movimiento

  // console.log(movimiento);
  // if (
  //   numeroSePasaALaDerecha(parteDecimal, posicionComa + movimiento) ||
  //   numeroSePasaALaIzquierda(parteEntera, posicionComa + movimiento + 1)
  // ) {
  //   alert("El número no entra en la tabla");
  // }
  //Mueve la coma y agrega ceros si hace falta

  if (movimiento < 0) {
    if (parteEntera.length + movimiento >= 0) {
      parteDecimal = parteEntera.slice(movimiento) + parteDecimal;
      parteEntera = parteEntera.slice(0, movimiento);
    } else {
      parteDecimal =
        "0".repeat(-movimiento - parteEntera.length) +
        parteEntera +
        parteDecimal;
      parteEntera = "";
    }
  }

  if (movimiento > 0) {
    if (parteDecimal.length - movimiento >= 0) {
      parteEntera = parteEntera + parteDecimal.slice(0, movimiento);
      parteDecimal = parteDecimal.slice(movimiento);
    } else {
      parteEntera =
        parteEntera +
        parteDecimal +
        "0".repeat(movimiento - parteDecimal.length);
      parteDecimal = "";
    }
  }

  // COLUMNAS DONDE PONDREMOS LA CANTIDAD EN LA NUEVA UNIDAD
  var columnaNueva = document
    .getElementById("nueva")
    .getElementsByTagName("td");

  for (var i = 0; i < columnaNueva.length; i++) {
    columnaNueva[i].innerHTML = "";
  }

  //IMPRIMIR EL NÚMERO ELEGIDO
  imprimirNumero(
    columnaNueva,
    parteEntera,
    posicionComa + movimiento,
    parteDecimal
  );
};

var numeroSePasaALaIzquierda = (cadena, posicionComa) =>
  cadena === undefined ? false : cadena.length - posicionComa > 0;

var numeroSePasaALaDerecha = (cadena, posicionComa) =>
  cadena === undefined ? false : cadena.length + posicionComa > 24;

var imprimirNumero = (columnas, parteEntera, posicionComa, parteDecimal) => {
  //Escribiendo la parte entera y la coma
  if (parteEntera === "") {
    columnas[posicionComa].innerHTML = "0,";
  } else {
    // Desde la coma hacia la izquierda
    columnas[posicionComa].innerHTML =
      parteEntera[parteEntera.length - 1] + ",";
    for (let i = 1; i < parteEntera.length; i++) {
      columnas[posicionComa - i].innerHTML =
        parteEntera[parteEntera.length - 1 - i];
    }
  }
  //Escribe la parte decimal
  if (parteDecimal !== undefined) {
    for (let i = 0; i < parteDecimal.length; i++) {
      columnas[posicionComa + i + 1].innerHTML = parteDecimal[i];
    }
  }
};

var mostrarOcultar = (id) => {
  var elemento = document.getElementById(id);
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
};
