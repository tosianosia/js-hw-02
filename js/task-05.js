/*
 * Напиши функцию `checkForSpam(message)`, принимающую 1 параметр `message` -
 * строку. Функция проверяет ее на содержание слов `spam` и `sale`. Если нашли
 * запрещенное слово то функция возвращает `true`, если запрещенных слов нет
 * функция возвращает `false`. Слова в строке могут быть в произвольном регистре.
 */

const checkForSpam = function (message) {
  const blacklistedWord1 = 'spam';
  const blacklistedWord2 = 'sale';
  const normalizedMsg = message.toLowerCase();

  return (
    normalizedMsg.includes(blacklistedWord1) ||
    normalizedMsg.includes(blacklistedWord2)
  );
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
