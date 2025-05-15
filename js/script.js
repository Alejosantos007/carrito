// Seleccionamos las imágenes usando sus IDs
const imagenGardevoir = document.getElementById('gardepeluche');
const imagenEspurr = document.getElementById('espurrpeluche');
const imagenPulseritas = document.getElementById('pulseritas');

// Añadimos el evento de clic a cada imagen
imagenGardevoir.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenGardevoir.src;
  document.body.appendChild(nuevaImagen);  // Se añade la nueva imagen al body
};

imagenEspurr.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenEspurr.src;
  document.body.appendChild(nuevaImagen);  // Se añade la nueva imagen al body
};

imagenPulseritas.onclick = function() {
  const nuevaImagen = document.createElement('img');
  nuevaImagen.src = imagenPulseritas.src;
  document.body.appendChild(nuevaImagen);  // Se añade la nueva imagen al body
};
