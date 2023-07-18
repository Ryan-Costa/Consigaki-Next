const translate = require('google-translate-api')

export async function translatePtBrToEnUs(string: string) {
  try {
    const resultado = await translate(string, { from: 'en', to: 'pt' })
    return resultado.text
  } catch (error) {
    console.error('Erro ao traduzir:', error)
    return null
  }
}
