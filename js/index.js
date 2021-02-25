function equiposMayoresEdad(arrayEquipos, edad) {
  return arrayEquipos.filter(equipo => equipo.asignado.empleado.edad >= edad);
}

function equiposProvincia(arrayEquipos, provincia) {
  return arrayEquipos.filter(equipo => equipo.asignado.provincia.toLowerCase() === provincia.toLowerCase());
}

function provincias(arrayEquipos) {
  return arrayEquipos
    .map(equipo => equipo.asignado.provincia)
    .filter((provincia, i, provincias) => provincias.indexOf(provincia) === i);
}

function trabajadoresTipo(arrayEquipos, tipo) {
  return arrayEquipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase());
}

function equiposPorTipo(arrayEquipos) {
  const equiposModificados = [];
  equiposModificados.push({
    tipo: "Portátil",
    equipos: arrayEquipos.filter(equipo => equipo.tipo === "Portátil")
  });
  equiposModificados.push({
    tipo: "Sobremesa",
    equipos: arrayEquipos.filter(equipo => equipo.tipo === "Sobremesa")
  });
  return equiposModificados;
}

function equiposTipoLocalidad(arrayEquipos, tipo, localidad) {
  return arrayEquipos.filter(equipo => equipo.tipo.toLowerCase() === tipo.toLowerCase() && equipo.asignado.provincia.toLowerCase() === localidad.toLowerCase());
}

function resumenEquipos(arrayEquipos) {
  const equiposModificados = arrayEquipos.map((equipo) => ({
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
  const ordenEdad = arrayEquipos.sort((a, b) => ((a.asignado.empleado.edad > b.asignado.empleado.edad) ? 1 : -1));

  return ordenEdad;
}

function equiposTipo(arrayEquipos, tipo) {
  const tipoEquipo = arrayEquipos.filter(arrayEquipos => arrayEquipos.tipo.toLowerCase() === tipo.toLowerCase());

  return tipoEquipo;
}
