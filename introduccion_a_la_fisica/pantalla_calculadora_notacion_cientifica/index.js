const querystring = window.location.search;

const params = new URLSearchParams(querystring);

const digitos = params.get("digitos");
var separadorDecimal = params.get("separadorDecimal");
const notacion = params.get("notacion");
var exponente = params.get("exponente");
var signo = params.get("signo");

switch (signo) {
  case "mas":
    signo = "+";
    break;
  case "menos":
    signo = "-";
    break;
  default:
    signo = "error";
}

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

const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `${representarDigitos(
  digitos,
  separadorDecimal
)}${representarExponente(notacion, signo, exponente)}`;

function representarDigitos(digitos, separadorDecimal) {
  return digitos.slice(0, 1) + separadorDecimal + digitos.slice(1);
}

function representarExponente(notacion, signo, exponente) {
  switch (notacion) {
    case "E":
      return "E" + signo + exponente;
    case "e":
      return "e" + signo + exponente;
    case "x10":
      return `x10<sup>${signo}${exponente}</sup>`;
    case "solo":
      return `<sup>${exponente}</sup>`;
    default:
      return "formato de la notación no definido";
  }
}
