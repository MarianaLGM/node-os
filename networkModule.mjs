/*1.En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
- Interfaz
- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno
 */

//escribo en terminar node networkModule.mjs para mostrar datos
import networkInterfaces from "node:os";//importa el módulo OS de Node.mjs

const datosRed = () => {
    const interfaces = networkInterfaces.networkInterfaces();
    let resultado = [];
    for (let i in interfaces) {
        interfaces[i].forEach(datos => {
            if (datos.family ==="IPv4" || datos.family === "IPv6") {
                resultado.push({
                    Interfaz: i,
                    Familia: datos.family,
                    Dirección: datos.address,
                    Interno: datos.internal,
                });
            }
        });
    }
    return resultado
};
export default datosRed;