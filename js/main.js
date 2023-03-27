function calcularCuotas() {
    // Obtenemos los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const monto = document.getElementById("monto").value;
  
    // Calculamos el monto total con el 30% de interés
    const montoTotal = monto * 1.3;
  
    // Definimos la cantidad de cuotas y la tasa de interés mensual
    const cuotas = 12;
    const tasaMensual = 0.01;
  
    // Calculamos la cuota mensual
    const cuotaMensual = montoTotal * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -cuotas)));
  
    // Creamos un mensaje con los resultados
    const mensaje = `Hola ${nombre} ${apellido}, el monto total con el 30% de interés es $${montoTotal.toFixed(2)}.<br>Para pagar en ${cuotas} cuotas, cada cuota mensual será de $${cuotaMensual.toFixed(2)}.`;
  
    // Mostramos el mensaje en la página
    document.getElementById("resultado").innerHTML = mensaje;
  }