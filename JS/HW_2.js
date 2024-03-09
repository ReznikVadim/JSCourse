// 1
const user = {
  name: "Boris",
  age: 24,
};
delete user.name;
user.firstName = "Boris";
console.log(user); // { age: 24, firstName: 'Boris' }
// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = [];
fruitContainer[0] = "apple"; // либо можно добавить три фрукта сразу одной строкой fruitContainer.push('apple', 'lemon', 'orange')
fruitContainer[1] = "lemon";
fruitContainer[2] = "orange";
console.log(fruitContainer); // [ 'apple', 'lemon', 'orange' ]
fruitContainer[1] = "banana";
console.log(fruitContainer); // [ 'apple', 'banana', 'orange' ]
// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3
/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

const yearsOfService = 5;
const performanceRating = 5;
let bonus;

if (yearsOfService < 5 && (performanceRating == 4 || performanceRating == 5)) {
  console.log("Бонус к ЗП 5%.");
  bonus = 0.05; // либо указать как строку "5%", тогда в объекте при console.log будет ключ-значение bonus: "5%" вместо 0.05
} else if (
  yearsOfService >= 5 &&
  (performanceRating == 4 || performanceRating == 5)
) {
  console.log("Бонус к ЗП 10%.");
  bonus = 0.1; // либо указать как строку "10%", тогда в объекте при console.log будет ключ-значение bonus: "10%" вместо 0.1
} else {
  console.log("Сотрудник не получает бонус.");
  bonus = 0;
}

employeeInfo = {
  yearsOfService: yearsOfService,
  performanceRating: performanceRating,
  bonus: bonus,
};

console.log(employeeInfo); // { yearsOfService: 5, performanceRating: 5, bonus: 0.1 }

// 4
const userData = {
  name: "Victor",
  age: 31,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    state: "Stateville",
    zipCode: "12345",
  },
};

const userData2 = {
  name: "Vlad",
  age: "31",
  address: {
    street: "456 Oak Avenue",
    city: "Townsville",
    state: "Stateland",
    zipCode: null,
  },
};

const data = [userData, userData2];

if (data[2]) {
  console.log("1"); // в нашем случае нет индекса [2], а только [0] и [1]. Выражение вернет false.
  // В консоли 1 выводиться НЕ будет. Код идет выполняться дальше.
} else if (
  data[0].age === data[1].age &&
  !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)
) {
  console.log("2");
  // давайте подставим значения в выражение в скобках, получим:
  // 31 === '31' && ! (typeof "Victor" !== "string" || typeof null) // подставили значения
  // false && ! ("string" !== "string" || "object") // немного преобразовали
  // "&& - возвращает true, если ОБА аргумента истинны, а иначе – false."
  // У нас в левой части выражения от оператора && уже есть false, таким образом всё выражение вернет false.
  // В консоли 2 выводиться НЕ будет. Код идет выполняться дальше.
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
  console.log("3");
  // давайте подставим значения в выражение в скобках, получим:
  // typeof "Victor" === "string" && +"31" <= 0  // немного преобразуем, учитывая, что унарный плюс сделает из строки число
  // "string" === "string" && 31 <= 0 // преобразуем дальше и получим
  // true && false
  // "&& - возвращает true, если ОБА аргумента истинны, а иначе – false."
  // Таким образом всё выражение вернет false.
  // В консоли 3 выводится НЕ будет. Код идет выполняться дальше.
} else if (typeof data[1].address["zipCode"] === "object") {
  console.log("4");
  // давайте подставим значения в выражение в скобках, получим:
  // typeof null === "object" // Результатом вызова typeof null является "object" (https://learn.javascript.ru/types), таким образом получим:
  // "object" === "object" // выражение возвращает TRUE
  // true
  // Таким образом в консоль выводится 4. А код дальше выполняться не будет, т.к. блок кода уже выполнился при получении true.
} else {
  console.log("5"); // 5-ка не выводится, т.к. уже выполнилось выведение 4-ки.
}

// 5
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */

const programmingLanguage = "JavaScript";
switch (programmingLanguage) {
  case "JavaScript":
    console.log("JavaScript - отличный выбор для веб-разработки!");
    break;
  case "Python":
    console.log("Python - мощный и удобный язык для разработки.");
    break;
  case "Java":
    console.log(
      "Java - популярный язык для разработки кросс-платформенных приложений."
    );
    break;
  case "C++":
    console.log(
      "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
    );
    break;

  default:
    console.log("Попробуйте угадать ЯП, который есть именно в этом задании");
}
