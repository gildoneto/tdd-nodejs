function mediana(arr) {
  let meio = Math.trunc(arr.length/2)
  let ordenado = arr.sort()
  return ordenado[meio]
}

console.log(mediana([4,8,2,8,9]))
module.exports = mediana;