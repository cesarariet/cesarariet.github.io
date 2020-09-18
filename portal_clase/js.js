function crearElemento (atributos) {
  let $elemento = document.createElement('div');
  for (atributo in atributos){
    $elemento.setAttribute(atributo,atributos[atributo]);
  }
  anotaciones.append($elemento);
}


function coordenadas () {
  let x = window.event.clientX
  let y = window.event.clientY
  return {x: x, y: y}
}
var idElemento = 0
function crearCuadrado (pos) {
  let atributos = {
                  class: 'cuadrado',
                  id: `cuad_${idElemento}`,
                  style:
                  `left: ${Math.min(pos[0].x,pos[1].x)}px;
                  top: ${Math.min(pos[0].y,pos[1].y)}px;
                  width:${Math.abs(pos[0].x-pos[1].x)}px;
                  height: ${Math.abs(pos[0].y-pos[1].y)}px;`
                  }
  idElemento++
  crearElemento(atributos);

}

var pos = []
var n = 0
const cuerpo = document.getElementById('anotaciones')
function eventoCuadrado() {
cuerpo.addEventListener('click', function cl() {
  pos.push(coordenadas());
  n++
  if (n === 2) {
    crearCuadrado(pos);
    pos = []
    // crear un cuadrado con coordenadas pos[0] y pos [1]
    n = 0
    cuerpo.removeEventListener('click',cl)
  }
})
}
document.addEventListener('keydown', (event) => {
  
   if (event.key === 'd'){
     idElemento--
     document.getElementById(`cuad_${idElemento}`).remove()

   } else if (event.key === 'r') {
    eventoCuadrado();
   }
})