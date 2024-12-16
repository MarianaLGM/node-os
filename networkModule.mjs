/*1.En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
 */

import networkInterfaces from "node:os";//importa el módulo OS de Node.mjs
const datosRed={
    interface: networkInterfaces(),
}



export default datosRed;

//escribo en terminar node networkModule.mjs para mostrar datos



//ejecutar system ****`node systemInfo.mjs`****bucle para recorrer e imprimir PENDIENTE

//node systemInfo.js