function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const fechaActual = new Date();

    if (isNaN(fechaNacimiento)) {
        alert('Por favor, introduce una fecha válida.');
        return;
    }

    // Calculamos la diferencia en milisegundos
    const diferencia = fechaActual - fechaNacimiento;

    // Calculamos los años, meses y horas vividos
    const añosVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    const mesesVividos = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const horasVividas = Math.floor(diferencia / (1000 * 60 * 60));

    // Mostramos los resultados
    document.getElementById('resultado').innerHTML = `
        <p>Has vivido ${añosVividos} años.</p>
        <p>Has vivido ${mesesVividos} meses.</p>
        <p>Has vivido ${horasVividas} horas.</p>
    `;
}