function mediana(arr) {
  let meio = Math.trunc(arr.length/2)
  let ordenado = arr.sort()
  return ordenado[meio]
}

module.exports = mediana;