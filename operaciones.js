const fs = require("fs");

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  let data = [];

  try {
    const file = fs.readFileSync("./citas.json", "utf-8");
    data = JSON.parse(file);
  } catch (error) {
    // Si el archivo está vacío o no existe, data seguirá siendo un array vacío.
  }

  const formato = {
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    color: color,
    enfermedad: enfermedad,
  };

  data.push(formato);
  fs.writeFileSync("citas.json", JSON.stringify(data, null, 2)); //  formatear
  console.log("Cita Ingresada");
};

const leer = () => {
  const file = fs.readFileSync("./citas.json", "utf8");
  console.log(`Registro de Cita: \n ${file}`);
};

module.exports = { registrar, leer };
