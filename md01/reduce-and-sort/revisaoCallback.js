// Uma callback é uma função passada para outra como parametro

function fabrica(callback, materiaPrima) {
  return callback(materiaPrima);
}
