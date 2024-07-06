/*Variables para programa de Juego: Número Secreto */

//Inicializando el número secreto a 0.
let numeroSecreto = 0;

//Inicializando el número de intentos a 0.
let intentos = 0;

//Creando una lista vacía para almacenar los numeros sorteados.
let listaNumerosSorteados = [];

//Establece el número máximo que se puede generar.
let numeroMaximo = 10;

//Función para asignar texto a un elemento HTML (En este caso le asignarpa texto a h1 y p del juego)
function asignarTextoElemento(elemento, texto) {
    // Selecciona el elemento HTML según el selector proporcionado.
    let elementoHTML = document.querySelector(elemento);
    //Asigna el texto proporcionado al contenido HTML del elemento.
    elementoHTML.innerHTML = texto;
    return;
}

//Función para verificar el intento del usuario

function verificarIntento() {
    //Obtiene el número ingresado por el usuario y lo convierte a entero.
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    //Comprueba si el número ingresado es igual al número secreto.
    if (numeroDeUsuario === numeroSecreto) {
        // Si el usuario acertó, muetra un mensaje de éxito.
        asignarTextoElemento(
            "p",
            `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
        );
        //Habilita el botón de reiniciar.
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //Si el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            //Si el número ingresado es mayor que el número secreto, muestra un mensaje indicando es menor.
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            //Si el número ingresado es mayor que es mayor que el número secreto, muestra un mensaje indicado es mayor.
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        //Incrementa el contador de intentos.
        intentos++;
        //Limpia la caja de texto del usuario.
        limpiarCaja();
    }
    return;
}

//Función para limpiar la caja de texto del usuario.
function limpiarCaja() {
    document.getElementById("valorUsuario").value =" ";
}

//Función para generar un número secreto aleatorio.
function generarNumeroSecreto() {
    //Genera un número aleatorio entre 1 y el número máximo.
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya se ha sorteado todos los números posibles.

    if (listaNumerosSorteados.length == numeroMaximo) {
        //Muestra un mensaje indicando que se sortearon todos los números.
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado ya esta en la lista de sorteados.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //Vuelve a generar un número secreto.
            return generarNumeroSecreto();
        } else {
            //Si el número generado no está en la lista, agregalo a la lista y devuélvelo.
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Función para establecer las condiciones iniciales del juego.
function condicionesIniciales() {
    //Asigna el texto inicial el título.
    asignarTextoElemento("h1", "¡Juego del número secreto!");
    //Asigna el texto inicial a las instrunciones.
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    //Genera y asigna el número secreto.
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el contador de intentos.
    intentos = 1;
    console.log(numeroSecreto);
}

//Función para reiniciar el juego.
function reiniciarJuego() {
    //Limpiar la caja de texto del usuario.
    limpiarCaja();
    //Establece las condiciones iniciales del juego.
    condicionesIniciales();
    //Deshabiliata el botón de reiniciar.
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

//Inicializar el juego al cargar la página.
condicionesIniciales();
