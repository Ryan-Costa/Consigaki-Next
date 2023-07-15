export const DateMask = (value: any) => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que não seja número por nada
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de número, o primeiro de 2 e o segundo de 1, e adiciona a barra
    .replace(/(\d{2})(\d)/, '$1/$2') // captura 2 grupos de número, o primeiro de 2 e o segundo de 1, e adiciona a segunda barra
    .replace(/(\d{4})\d+?$/, '$1') // captura 4 números e não permite a digitação de mais nada
}
