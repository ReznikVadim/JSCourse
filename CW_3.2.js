// //Напишем функцию getTimeOfDay, которая принимает текущий час (от 0 до 23) и возвращает строку,
// // указывающую на время суток: утро, день, вечер или ночь.

// пробую перезаписать файл

let currentHour = -25000;

function getTimeOfDay(currentHour) {
  if (currentHour >= 0 && currentHour < 6) {
    return "Ночь";
  } else if (currentHour >= 6 && currentHour < 12) {
    return "Утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "День";
  } else if (currentHour >= 18 && currentHour <= 23) {
    return "Вечер";
  } else return "Введите корректный час";
}

console.log(`${getTimeOfDay(currentHour)}`);

// // - Написать программу, используя цикл for, которая выводит в консоль числа от 1 до 10.
// // - Написать программу, используя цикл for, которая выводит числа от 1 до 10, прерывая выполнение при достижении числа 7.
// // - Используя цикл while, вывести все четные числа от 1 до 20, пропуская числа, кратные 5.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) break;
//   console.log(i);
// }

// let i = 1;

// while (i <= 20) {
//   if (i % 2 === 0 && i % 5 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

/*Создать функцию formatPhoneNumber, которая принимает строку, представляющую номер телефона, и возвращает отформатированную строку.
 formatPhoneNumber("1234567890");
 Вывод: "(123) 456-7890"*/

function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");
  if (cleaned.length === 10) {
    const formatted = `(${cleaned.substring(0, 3)}) ${cleaned.substring(
      3,
      6
    )}-${cleaned.substring(6, 10)}`; // Prettier сам так разбил выражение на несколько строк

    return formatted;
  } else {
    console.log("Введите номер телефона корректно");
  }
}
console.log(formatPhoneNumber("1234567890"));
