/***Objetivo:** 
Crear un programa en Node.js que imprima información sobre el sistema operativo y las interfaces de red, utilizando el patrón de diseño modular.

Implementación de `osModule.js`

En el archivo `osModule.js` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

**Ejemplo de output:**
Nombre: darwin
Tipo: Darwin
Versión: Darwin Kernel Version 23.1.0: Mon Oct  9 21:27:27 PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64
Arquitectura: x64
CPUs: 12
MemoriaTotal: 16384.00 MB
MemoriaLibre: 370.71 MB*/


import { type, platform, release, arch, cpus, totalmem, freemem } from "node:os";//importa el módulo OS de Node.js
const infoPc={
    Nombre: type(),
    Tipo: platform(),
    Versión: release(),
    Arquitectura: arch(),
    CPUs: cpus(),
    MemoriaTotal: totalmem(),//FALTA PASAR A MB
    MemoriaLibre: freemem(),//FALTA PASAR A MB
}

console.log(infoPc);

export default {infoPc};


/*
console.log(os.this)//TRAE TODO
console.log(os.type());//NOMBRE: del sistema operativo
console.log(os.platform());//TIPO: sist operativo
console.log(os.release());//VERSIÓN sist operativo
console.log(os.arch());//ver la arquitectura CPU
console.log(os.cpus());//CPUs:
console.log(os.totalmem());//memorial total 
console.log(os.freemem());//memoria libre*/