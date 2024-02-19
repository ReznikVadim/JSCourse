// 1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true, если функции палиндром.
//Палиндром - строка, которая читается с конца так же, как и с начала.
//Условие - должны учитываться только буквы без знаков препинания.
// f("tenet") // true
// f("tenet!") // true

function isPalindrome(str) {
  const cleanStr = str.replace(/[^\w]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

console.log(isPalindrome("1221")); // true

/* 2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
f('Web Development Tutorial'); // "Development" */

function getLongestWord(str) {
  const wordsArray = str.split(/\s+/);

  let longest = "";

  for (const word of wordsArray) {
    const cleanWord = word.replace(/[^\w]/g, "");

    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}

const textExample = "Web Development Tutorial";

console.log(getLongestWord(textExample)); // "Development"

/* 3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном порядке.
//Возвращает новую строку с буквами в алфавитном порядке
f("alphabetical"); // "aaabcehillpt" */

function sortAlphabetically(str) {
  const sortedStr = str.split("").sort().join("");
  return sortedStr;
}

console.log(sortAlphabetically("прИИВвет")); // ВИИвепрт

// 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа.
// f('фывфавыапрс'); // 8

function firstUniqueCharIndex(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqueCharIndex("фывфавыапрс")); // 8

// 5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.
// f('Web Development Tutorial')); //9

function countVowels(str) {
  const lowerCaseStr = str.toLowerCase();
  const vowels = lowerCaseStr.match(/[aeiou]/g);

  return vowels ? vowels.length : 0;
}

console.log(countVowels("Web Development Tutorial")); // 9
