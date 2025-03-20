const registrarDestino = (event) => {
  event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

  // Obtén los valores seleccionados
  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  const transporte = document.getElementById('transporte').value;

  // Inicializamos costoBase como 0
  let costoBase = 0;

  // Verificamos el destino y asignamos el costo base
  if (destino === "Paris") {
      costoBase = 500;
  } else if (destino === "Londres") {
      costoBase = 400;
  } else if (destino === "Berlín") {
      costoBase = 600;
  }

  // Verificamos el tipo de transporte y sumamos el costo adicional
  if (transporte === "Avión") {
      costoBase += 300;
  } else if (transporte === "Tren") {
      costoBase += 150;
  } else if (transporte === "Autobús") {
      costoBase += 80;
  }

  // Asegurémonos de que el costoBase es un número
  costoBase = Number(costoBase); // Convierte a número en caso de que sea un string

  // Convertir la fecha al formato dd/mm/aaaa
  const fechaObj = new Date(fecha);
  const fechaFormateada = `${fechaObj.getDate().toString().padStart(2, '0')}/${(fechaObj.getMonth() + 1).toString().padStart(2, '0')}/${fechaObj.getFullYear()}`;

  // Verifica que los campos no estén vacíos
  if (destino && fecha && transporte && destino !== "- Selecciona una opción -" && transporte !== "- Selecciona una opción -") {
    // Crear un nuevo elemento de lista para el itinerario
    const itinerarioList = document.getElementById('lista-itinerario');
    const listItem = document.createElement('li');
    
    // Crear la lista con los datos de destino, fecha, transporte y costo
    listItem.innerHTML = `
      <ul>
        <li>Destino: ${destino}</li>
        <li>Fecha de Viaje: ${fechaFormateada}</li>
        <li>Transporte: ${transporte}</li>
        <li>Costo Total: ${costoBase} € </li>
      </ul>
    `;
    
    // Agregar el nuevo item al listado
    itinerarioList.appendChild(listItem);

    // Limpiar los campos del formulario después de registrar
    document.getElementById('form-destino').reset();
  } else {
    alert('Por favor, complete todos los campos correctamente.');
  }
};

export default registrarDestino;




