/*
const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52
}

Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль
 */

const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

function calculateAverage(obj) {
  let sum = 0;
  let count = 0;

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
      count++;
    }
  }

  if (count === 0) {
    console.log("Нет числовых значений");
    return;
  }

  const average = (sum / count).toFixed(2);
  console.log("Среднее арифметическое всех числовых значений:", average);
}

calculateAverage(person);

/*
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */
function customAssign(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}

const targetObj = { a: 1, b: 2 };
const sourceObj = { b: 3, c: 4 };

const result = customAssign(targetObj, sourceObj);

console.log(result); // { a: 1, b: 3, c: 4 }

/*
//TODO: максимально часто встречающаяся задача на фронте

Необходимо создать функцию formatDate,
которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".

1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
5. Верните отформатированную строку.

Пример использования:

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

Подсказка: Месяцы начинаются с нуля
*/

function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new TypeError("Параметр должен быть объектом Date");
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log(formattedDate); // 21.02.2024, 18:53:04
