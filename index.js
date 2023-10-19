const { registrar, leer } = require("./operaciones.js");

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (!operacion) {
  console.log("Uso: node index.js [registrar/leer] [argumentos]");
  process.exit(1); // Codigo de error
}

if (operacion === "registrar") {
  if (argumentos.length !== 6) {
    console.log("Uso incorrecto para 'registrar'. Se requieren 5 argumentos.");
    process.exit(1); // Codigo de error
  }
  registrar(
    argumentos[1],
    argumentos[2],
    argumentos[3],
    argumentos[4],
    argumentos[5]
  );
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operacion no válida. Utilice 'registrar' o 'leer'.");
  process.exit(1); // Codigo de error
}
