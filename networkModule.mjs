/*1.En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
 */

import {networkInterfaces} from "node:os";//importa el módulo OS de Node.js
//otra forma de exportar:module.export infoPc; 
const datosRed={
    interface: networkInterfaces(),
}

export default {datosRed};

//escribo en terminar node networkModule.mjs para mostrar datos



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////INFO BEA REVIEW

const usuario = {
    nombre : 'Alexis',
    curso : 'Fullstack',
    ciudad : 'Madrid'
}

// Object.keys() --> array con claves

console.log(Object.keys(usuario));

//// [ 'nombre', 'curso', 'ciudad' ]

// Object.values() --> array con valores

console.log(Object.values(usuario));

//// [ 'Alexis', 'Fullstack', 'Madrid' ]

// Object.entries() --> todo en array
console.log(Object.entries(usuario));
/* 
    [
        [ 'nombre', 'Alexis' ],
        [ 'curso', 'Fullstack' ],
        [ 'ciudad', 'Madrid' ]
    ]
*/

const user = [
    [ 'nombre', 'Alexis' ],
    [ 'curso', 'Fullstack' ],
    [ 'ciudad', 'Madrid' ]
]

// Object.fromEntries()
console.log(Object.fromEntries(user));

/*
    { 
        nombre: 'Alexis', 
        curso: 'Fullstack', 
        ciudad: 'Madrid' 
    }
*/