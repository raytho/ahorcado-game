const $app = document.getElementById("app");
const $intentos = document.getElementById("intentos");
const $box = document.getElementById("boxPalabra");
var alfabeto = new Array(26).fill(1).map((_, i) => String.fromCharCode(65 + i));

getWordData = () => {
  var attemps = 4;
  var palabra = "HOLA";
  var titulo = document.createElement("p");
  titulo.innerHTML = "Adivina la palabra";
  var palabraElemento = document.createElement("p");
  var wordSize = palabra.length;
  for (let index = 0; index < wordSize; index++) {
    palabraElemento.innerHTML += `-`;
  }
  $box.appendChild(titulo);
  $box.appendChild(palabraElemento);

  var itemIntentos = document.createElement("p");
  itemIntentos.innerHTML = `Intentos: ${attemps}`;
  $intentos.appendChild(itemIntentos);
};

var getValue = (value) => {
  var caracteres = Array.from(palabra);
  if (caracteres.includes(value)) {
    console.log("Atinaste");
  } else {
    attemps--;
    itemIntentos.innerHTML = `Intentos: ${attemps}`;
    $intentos.appendChild(itemIntentos);
    console.log("Upps");
  }
};

var loadAlphabeth = () => {
  getWordData();
  for (let index = 0; index < alfabeto.length; index++) {
    let newItem = document.createElement("button");
    newItem.setAttribute("id", `btnLetter${index + 1}`);

    newItem.addEventListener("click", () => {
      getValue(alfabeto[index]);
    });
    newItem.innerHTML = alfabeto[index];
    $app.appendChild(newItem);
  }
};

loadAlphabeth();
