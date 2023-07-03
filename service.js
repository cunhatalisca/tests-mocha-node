const { get } = require('axios')

const URL = `https//swapi.dev/api/people`

async function obterPessoas(name) {
  const url = `${URL}/?search=${name}&format=json`
  const result = await get(url)
  console.log(result.data)

  return result.data.result.map(mapearPessoas)
}

function mapearPessoas(item) {
  return {
    name: item.name,
    peso: item.height
  }
}

module.exports = { obterPessoas }