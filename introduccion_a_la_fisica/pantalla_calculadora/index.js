const querystring = window.location.search;

const params = new URLSearchParams(querystring);

const parteEntera = params.get("parteEntera");
const parteDecimal = params.get("parteDecimal");
var separadorDecimal = params.get("separadorDecimal");
var separadorMillares = params.get("separadorMillares");

switch (separadorDecimal) {
  case "coma":
    separadorDecimal = ",";
    break;
  case "punto":
    separadorDecimal = ".";
    break;
  default:
    separadorDecimal = "Error";
}

switch (separadorMillares) {
  case "coma":
    separadorMillares = ",";
    break;
  case "punto":
    separadorMillares = ".";
    break;
  case "espacio":
    separadorMillares = " ";
    break;
  default:
    separadorMillares = "Error";
}

const pantalla = document.getElementById("pantalla");

pantalla.innerHTML =
  separarParteEnteraEnMillares(parteEntera, separadorMillares) +
  separadorDecimal +
  parteDecimal;

function separarParteEnteraEnMillares(parteEntera, separadorMillares) {
  cantidadDeSeparadores = Math.floor(parteEntera.length / 3);

  // En el caso de que la parte entera tenga una cantidad de digitos multiplo de tres,
  // Debemos sacar el último separador.
  if (parteEntera.length % 3 === 0) cantidadDeSeparadores--;

  // En el caso que no sea necesario agregar separador devuelve la parte entera sin alterar.
  if (cantidadDeSeparadores === 0) return parteEntera;

  // Cuando es necesario agregar separadores de millares este bucle se encarga de eso.

  for (var i = cantidadDeSeparadores; i > 0; i--) {
    parteEntera =
      parteEntera.slice(0, -3 * i) +
      separadorMillares +
      parteEntera.slice(-3 * i);
  }
  return parteEntera;
}
