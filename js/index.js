function equiposMayoresEdad(equipos, edad) {
  return equipos.filter(equipo => equipo.asignado.empleado.edad >= edad);
}
console.log(equiposMayoresEdad(equipos, 30));
function trabajadoresTipo(equipos, tipo) {
  return equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo);
}

function equiposPorTipo(equipos) {
  const equiposModificados = [];
  equiposModificados.push({
    tipo: "Portátil",
    equipos: equipos.filter(equipo => equipo.tipo === "Portátil")
  });
  equiposModificados.push({
    tipo: "Sobremesa",
    equipos: equipos.filter(equipo => equipo.tipo === "Sobremesa")
  });
  return equiposModificados;
}

function equiposTipoLocalidad(equipos, tipo, localidad) {
  return equipos.filter(equipo => equipo.tipo.toLowerCase() === tipo && equipo.asignado.provincia.toLowerCase() === localidad);
}

function resumenEquipos(equipos) {
  const equiposModificados = equipos.map((equipo) => ({
    id: equipo.id,
    poblacion: equipo.asignado.poblacion,
    provincia: equipo.asignado.provincia
  }));
  return equiposModificados;
}
