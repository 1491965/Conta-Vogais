const text1 = "Eu vou para a escola"
const text2 = "O dia está lindo hoje"

const vowels = "AÁaáEÉeéIÍiÍOÓoóUÚuÚ"
vowelCounter = 0

function countVowels(texto) {
    for ( const iText of texto) {
        index = 0
        for ( let iVowels = 0; iVowels <= vowels.length; iVowels++) {
if (iText == vowels[iVowels]) vowelCounter++
        }
    }
return vowelCounter
}
console.log(countVowels(text1))