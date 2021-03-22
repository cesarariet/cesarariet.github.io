function resultado() {
  var numero = document.getElementById("numero").value;
  if (numero === "") {
    alert("Escriba un número y un exponente.");
    return false;
  }
  var [parteEntera, parteDecimal] = numero.toString().split(".");
  parteDecimal === undefined ? (parteDecimal = "") : null;

  numero = parteEntera + "," + parteDecimal;
  var notacion = document.getElementById("notacion").value;
  var exponente = document.getElementById("exponente").value;
  if (exponente === "") {
    alert("Escriba un número y un exponente.");
    return false;
  }
  exponente = parseInt(exponente);
  var resultado = document.getElementById("resultado");
  if (resultado.lastChild) {
    resultado.innerHTML = "";
  }
  resultado.appendChild(notacionCientifica(numero, notacion, exponente));
  setTimeout(() => {
    resultado.innerHTML += " = ";
    [numero, exponente] = irHaciaNotacionDecimal(numero, exponente);
    resultado.appendChild(notacionCientifica(numero, notacion, exponente));
    repetirIrHaciaNotacionDecimalEImprimir(
      resultado,
      numero,
      notacion,
      exponente
    );
  }, 800);
}

//CREA EL ELEMENTO SPAN CON LA NOTACION CIENTIFICA

function notacionCientifica(numero, notacion, exponente) {
  e = document.createElement("span");
  if (exponente === 0) {
    e.innerHTML = numero;
  } else if (notacion == "x10") {
    e.innerHTML = numero + notacion;
    var superindice = document.createElement("sup");
    superindice.innerHTML = exponente;
    e.appendChild(superindice);
  } else {
    e.innerHTML = numero + notacion + exponente;
  }
  return e;
}

function moverComaALaDerecha(numero, exponente) {
  exponente = exponente - 1;
  var [parteEntera, parteDecimal] = numero.split(",");
  if (parteDecimal === "") {
    parteEntera = parteEntera + "0";
  } else {
    parteEntera = parteEntera + parteDecimal[0];
    parteDecimal = parteDecimal.slice(1);
  }
  numero = parteEntera + "," + parteDecimal;
  return [numero, exponente];
}

function moverComaALaIzquierda(numero, exponente) {
  exponente = exponente + 1;
  var [parteEntera, parteDecimal] = numero.split(",");
  if (parteEntera === "") {
    parteDecimal = "0" + parteDecimal;
    parteEntera = "0";
  } else {
    parteDecimal = parteEntera.slice(-1) + parteDecimal;
    parteEntera.slice(0, -1) === ""
      ? (parteEntera = "0")
      : (parteEntera = parteEntera.slice(0, -1));
  }
  numero = parteEntera + "," + parteDecimal;
  return [numero, exponente];
}

//DEVUELVE UN NUEVO NUMERO EN STRING Y UN EXPONENTE EN NUMBER MOVIENDO LA COMA PARA QUE LA NOTACION CIENTIFICA SE ACERQUE A LA DECIMAL
//SI NO HAY MOVIMIENTO QUE HACER DEVUELVE FALSE
function irHaciaNotacionDecimal(numero, exponente) {
  if (exponente > 0) {
    [numero, exponente] = moverComaALaDerecha(numero, exponente);
  } else if (exponente < 0) {
    [numero, exponente] = moverComaALaIzquierda(numero, exponente);
  } else if ((exponente = 0)) {
    return undefined;
  }
  return [numero, exponente];
}

function repetirIrHaciaNotacionDecimalEImprimir(
  elemento,
  numero,
  notacion,
  exponente
) {
  setTimeout(() => {
    elemento.lastChild.remove();
    [numero, exponente] = irHaciaNotacionDecimal(numero, exponente);
    elemento.appendChild(notacionCientifica(numero, notacion, exponente));
    if (exponente === 0) {
      return false;
    }

    repetirIrHaciaNotacionDecimalEImprimir(
      elemento,
      numero,
      notacion,
      exponente
    );
  }, 800);
}
