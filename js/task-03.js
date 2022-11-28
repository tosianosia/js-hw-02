/*
 * Напиши функцию `findLongestWord(string)`, которая принимает параметром
 * произвольную строку (в строке будут только слова и пробелы) и возвращает самое
 * длинное слово в этой строке.
 */

const findLongestWord = function (string) {
  const array = string.split(' ');
  let longestWord = array[0];

  for (const element of array) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
