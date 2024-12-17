/***Objetivo:** 
Crear un programa en Node.js que imprima información sobre el sistema operativo y las interfaces de red, utilizando el patrón de diseño modular.

Implementación de `osModule.js`

/*1.En el archivo `osModule.mjs` deberás sacar los siguientes datos:
- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer*/


import { type, platform, release, arch, cpus, totalmem, freemem } from "node:os";//importa el módulo OS de Node.js

const convertirMb= 1024**2;

const infoPc={
    Nombre: type(),
    Tipo: platform(),
    Versión: release(),
    Arquitectura: arch(),
    CPUs: cpus(),
    MemoriaTotal: (totalmem()/convertirMb),
    MemoriaLibre: (totalmem()/convertirMb),
}

console.log(infoPc);

export default infoPc;//otra forma de exportar:module.export infoPc; 

//escribo en terminar node osModule.js para mostrar datos

/*
console.log(os.this)//TRAE TODO
console.log(os.type());//NOMBRE: del sistema operativo
console.log(os.platform());//TIPO: sist operativo
console.log(os.release());//VERSIÓN sist operativo
console.log(os.arch());//ver la arquitectura CPU
console.log(os.cpus());//CPUs:
console.log(os.totalmem());//memorial total 
console.log(os.freemem());//memoria libre*/