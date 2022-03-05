const matchingStrings = require('../src/sparseArrays');

function testSparseArrays() {

  // mensagens padrão de sucesso e erro
  const msgSucesso = "\x1b[1;32m 🠕🠕🠕 TESTE PASSOU ✅ \x1b[0m"
  const msgErro = "\x1b[1;41m 🠕🠕🠕 ERRO NO TESTE ❌ \x1b[0m"
  const linha = " ================================\n"

  // funcões para exibir o resultado do teste no console
  const printSuccesso = () => console.log(`${msgSucesso}`)
  const printErro = () => console.log(`${msgErro}`)
  const printLinha = () => console.log(linha)

  const seEsperaQue = (teste) => ({
    seja: (esperado) => { 
      if (teste === esperado){
        printSuccesso()
        printLinha()
      } else {
        printErro()
        printLinha()
      }
    },
  
    naoSeja: (esperado) => { 
      if (teste !== esperado){
        printSuccesso()
        printLinha()
      } else {
        printErro()
        printLinha()
      }
    }
  })
  
  const esteTeste = (descricao, funcaoCallback) => {
      console.log(`\n${descricao}`)
      funcaoCallback()
  }
  
  esteTeste(' Deveria retornar null',
  () => {
    seEsperaQue(matchingStrings(null,null)).seja(null)
  })

  esteTeste(' Deveria retornar [2,1,0]',
  () => {
    let strings = ['aba','baba','aba','xzxb']
    let queries = ['aba', 'xzxb','ab']
    seEsperaQue(matchingStrings(strings,queries)).seja([2,1,0])
  })
  
}

testSparseArrays()