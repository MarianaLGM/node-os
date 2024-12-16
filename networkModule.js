/*1.En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
 */

import {networkInterfaces} from "node:os";//importa el módulo OS de Node.js
const datosRed={
    interface: networkInterfaces(),
}

console.log(datosRed.interface);

export default {datosRed};



//escribo en terminar node networkModule.js para mostrar datos




