/*## Paso 4: Ejecución del programa
Deberás "importar" o "requerir" `osModule.js` y `networkModule.js` en el archivo `systemInfo.js` Aquí es donde estará toda la información
para imprimir en la terminal.

Abre la terminal, navega al directorio donde guardaste los archivos y ejecuta el programa con el siguiente comando:
`node systemInfo.js`

Desde node podemos abrir una nueva terminal en el sitio donde trabajamos:
Menú Terminal -> Nuevo Terminal -> Ejecutamos `node systemInfo.js` y vemos el resultado. Recuerda los `console.log()`

# Pistas:
- Completa el archivo `systemInfo.js` para imprimir la información. Puedes utilizar un bucle for...in, forEach, ...
 También Object.entries para recorrer los objetos e imprimir la información.
- Documentación `node:os` https://nodejs.org/api/os.html
- Algunos métodos os: version(), platform(), cpus(), totalmem(), networkInterfaces, freemem(), type(), arch()*/


//import network y osModule
import {infoPc} from "./osModule.js";
import {datosRed} from "./networkModule.mjs";

console.log (infoPc);
console.log (datosRed);

//jecutar system ****`node systemInfo.js`****