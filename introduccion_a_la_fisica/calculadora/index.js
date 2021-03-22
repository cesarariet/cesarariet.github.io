// Parte del ejercicio 1
var numero, opcion, millar, decimal, cantidadDecimales;
var parteEntera, parteDecimal;

var nuevoNumero = () => {
  numero = Math.floor(1000000000 * Math.random()).toString();
  opcion = Math.floor(6 * Math.random()).toString();
  cantidadDecimales = Math.floor(5 * Math.random());

  switch (opcion) {
    case "0":
      millar = ".";
      decimal = ",";
      break;
    case "1":
      millar = ",";
      decimal = ".";
      break;
    case "2":
      millar = " ";
      decimal = ",";
      break;
    case "3":
      millar = " ";
      decimal = ".";
      break;
    case "4":
      millar = "";
      decimal = ",";
      break;
    case "5":
      millar = "";
      decimal = ".";
      break;
  }
  // Divide la parte entera y la decimal
  if (cantidadDecimales === 0) {
    parteEntera = numero;
    parteDecimal = decimal; //agrega el separador decimal
  } else {
    parteEntera = numero.slice(0, -1 * cantidadDecimales);
    parteDecimal = decimal + numero.slice(-1 * cantidadDecimales); //agrega el separador decimal
  }
  var largo = parteEntera.length;
  for (var i = -3; i >= -1 * largo; i -= 4) {
    parteEntera = parteEntera.slice(0, i) + millar + parteEntera.slice(i);
  }
};

var escribirNumero1 = () => {
  nuevoNumero();
  var e = document.getElementById("cantidad1");
  e.innerHTML = parteEntera + parteDecimal;
};
escribirNumero1();

var corregir = () => {
  var eleccion = document.getElementById("eleccion1").value;
  if (eleccion === opcion) {
    alert(
      `¡Respuesta correcta! \n Felicitaciones, ha cambiado el número, puedes intentarlo otra vez.`
    );
    escribirNumero();
  } else {
    alert(
      "Respuesta incorrecta \n Presta atención a los separadores de derecha a izquerda. En eso orden siempre aparece primero el separador decimal. \n Prueba de nuevo."
    );
  }
};

//Parte del Ejercicio 2

var numero2, opcion2, millar2, decimal2, cantidadDecimales2;
var parteEntera2, parteDecimal2, numero2Resultado;
var nuevoNumero2 = () => {
  numero2 = Math.floor(1000000000 * Math.random()).toString();
  opcion2 = Math.floor(4 * Math.random()).toString();
  cantidadDecimales2 = Math.floor(5 * Math.random());

  switch (opcion2) {
    case "0":
      millar2 = ".";
      decimal2 = ",";
      break;
    case "1":
      millar2 = ",";
      decimal2 = ".";
      break;
    case "2":
      millar2 = " ";
      decimal2 = ",";
      break;
    case "3":
      millar2 = " ";
      decimal2 = ".";
      break;
  }
  // Divide la parte entera y la decimal
  if (cantidadDecimales2 === 0) {
    parteEntera2 = numero2;
    parteDecimal2 = decimal2; //agrega el separador decimal
    numero2Resultado = numero2;
  } else {
    parteEntera2 = numero2.slice(0, -1 * cantidadDecimales2);
    parteDecimal2 = decimal2 + numero2.slice(-1 * cantidadDecimales2); //agrega el separador decimal
    numero2Resultado =
      parteEntera2 + "." + numero2.slice(-1 * cantidadDecimales2);
  }
  var largo = parteEntera2.length;
  for (var i = -3; i >= -1 * largo; i -= 4) {
    parteEntera2 = parteEntera2.slice(0, i) + millar2 + parteEntera2.slice(i);
  }
};

var escribirNumero2 = () => {
  var e = document.getElementById("cantidad2");
  nuevoNumero2();
  e.innerHTML = parteEntera2 + parteDecimal2;
};
escribirNumero2();

var corregir2 = () => {
  var respuesta = document.getElementById("respuesta2").value;
  console.log(respuesta);
  console.log(parseFloat(numero2Resultado));
  if (respuesta == parseFloat(numero2Resultado)) {
    alert(
      "¡Correcto! \n Puedes hacer otro intento con el nuevo número generado."
    );
    escribirNumero2();
  } else {
    alert(
      "Respuesta Incorrecta \n Recuerda que el separador decimal es aquel que se encuentra más a la derecha del número."
    );
  }
};
