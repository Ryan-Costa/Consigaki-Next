export function toUpperCase(input: string) {
  return input
    .split(' ') // Divide a string em palavras separadas por espaços
    .map((word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`) // Capitaliza a primeira letra de cada palavra e adiciona ()
    .join(' ') // Junta as palavras novamente em uma string
}
