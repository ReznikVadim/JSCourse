//Напишем функцию getTimeOfDay, которая принимает текущий час (от 0 до 23) и возвращает строку,
// указывающую на время суток: утро, день, вечер или ночь.

let currentHour = 7;

function getTimeOfDay(currentHour) {
  if (currentHour >= 0 && currentHour < 6) {
    return "Ночь";
  } else if (currentHour >= 6 && currentHour < 12) {
    return "Утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "День";
  } else {
    return "Вечер";
  }
}

console.log(`${getTimeOfDay(currentHour)}`);
