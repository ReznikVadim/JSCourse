// 1
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */

function multiplyTable(n) {
  if (n > 0 && Number.isInteger(n)) {
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 1; j <= n; j++) {
        row += i * j + "\t";
      }
      console.log(row);
    }
  } else {
    console.log("Введите целое положительное число");
    return;
  }
}

multiplyTable(5);

// 2
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */

function calcFactorial(n) {
  if (n >= 0 && Number.isInteger(n)) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }
    console.log(factorial);
  } else {
    console.log("Введите целое положительное число");
  }
}

calcFactorial(-1); // Введите целое положительное число
calcFactorial(0); // 1
calcFactorial(1); // 1
calcFactorial(5); // 120

//3
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/

function addWithLoss(num1, num2, znak) {
  sum = num1 + num2;
  return +sum.toFixed(znak);
}

console.log(addWithLoss(1.5, 2.235, 2)); // 3.73
console.log(addWithLoss(1.5, 2.235, 1)); // 3.7

//4

/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/

function processText(text) {
  text = text.trim().toLowerCase().replaceAll("a", "X");
  return text;
}

console.log(processText(" ZDAROVA!   ")); //zdXrovX!

//5

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

 */

//1

function encodeString(inputText, key) {
  let encodedResult = "";

  for (let i = 0; i < inputText.length; i++) {
    let charCode = inputText.charCodeAt(i);
    let encodedCharCode = charCode + key;
    encodedResult += String.fromCharCode(encodedCharCode);
  }
  return encodedResult;
}

console.log(encodeString("Hello, World!", 5));

//2.

function decodeString(encodedText, key) {
  let decodedResult = "";

  for (let i = 0; i < encodedText.length; i++) {
    let encodedCharCode = encodedText.charCodeAt(i);
    let charCode = encodedCharCode - key;
    decodedResult += String.fromCharCode(charCode);
  }

  return decodedResult;
}

console.log(decodeString("Mjqqt1%\twqi&", 5));
