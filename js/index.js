function trabajadoresTipo(equipos, tipo) {
  return equipos.filter(equipo => equipo.tipo === tipo);
}
console.log(trabajadoresTipo(equipos, "Portátil"));
