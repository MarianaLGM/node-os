/*Implementación de `networkModule.js`

En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

**Ejemplo de output:**
Interfaz lo0:
  Familia: IPv4
  Dirección: 127.0.0.1
  Interno: true
  Familia: IPv6
  Dirección: ::1
  Interno: true
  Familia: IPv6
  Dirección: fe80::1
  Interno: true

Interfaz en5:
  Familia: IPv6s
  Dirección: fe80::aede:48ff:fe00:1122
  Interno: false*/


  /*INTERFACES
     -familia - family
     -dirección -address
     -interno -internal

  */

import {networkInterfaces} from "node:os";//importa el módulo OS de Node.js
const datosRed={
    Interfaz: networkInterfaces(),
}

//familia:family(),
//Dirección: address(),
///Interno: internal()


/*
interfaz.Ethernet

console.log(datosRed);

export default {datosRed};



