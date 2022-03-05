function matchingStrings(strings, queries) {

  let result = []
  let contador = 0
  
  for (let i = 0; i < queries.length; i++) {
    
    for (let j = 0; j < strings.length; j++) {
      if(JSON.stringify(queries[i]) === JSON.stringify(strings[j])) {
        contador++
      }
    }
    
    result.push(contador)
    contador = 0
  }
  return JSON.stringify(result)
}

let strings = ['aba','baba','aba','xzxb']
let queries = ['aba', 'xzxb','ab']
matchingStrings(strings, queries)

let strings2 = ['abcde','sdaklfj','asdjf','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf']
let queries2 = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']
matchingStrings(strings2,queries2)

module.exports = matchingStrings;