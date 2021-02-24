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
console.log(equiposTipoLocalidad(equipos, "portátil", "tarragona"));
