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

function puestos(arrayEquipos) {
  const puesto = arrayEquipos.map(arrayEquipos => arrayEquipos.asignado.empleado.puesto);

  return puesto;
}

function edadMedia(arrayEquipos) {
  const reducer = (acc, currentValue) => acc + currentValue;
  const media = arrayEquipos.map(arrayEquipos => arrayEquipos.asignado.empleado.edad)
    .reduce(reducer) / arrayEquipos.length;

  return media;
}

function equiposPorEdad(arrayEquipos) {
  const ordenEdad = arrayEquipos.sort((a, b) => (a.asignado.empleado.edad > b.asignado.empleado.edad) ? 1 : -1);

  return ordenEdad;
}

function equiposTipo(arrayEquipos, tipo) {
  const tipoEquipo = arrayEquipos.filter(arrayEquipos => arrayEquipos.tipo === tipo);

  return tipoEquipo;
}
