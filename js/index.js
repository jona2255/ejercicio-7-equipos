function trabajadoresTipo(equipos, tipo) {
  return equipos.filter(equipo => equipo.tipo === tipo);
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
