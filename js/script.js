const imagenGardevoir = document.getElementById('gardepeluche');
const imagenEspurr = document.getElementById('espurrpeluche');
const imagenPulseritas = document.getElementById('pulseritas');
const imagenLapland = document.getElementById('laplandpeluche');

const containerBuy = document.querySelector('.container-buy');

imagenGardevoir.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenGardevoir.src;
  containerBuy.appendChild(nuevaImagen);
};

imagenEspurr.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenEspurr.src;
  containerBuy.appendChild(nuevaImagen);
};

imagenPulseritas.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenPulseritas.src;
  containerBuy.appendChild(nuevaImagen);
};
imagenLapland.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenLapland.src;
  containerBuy.appendChild(nuevaImagen);
};