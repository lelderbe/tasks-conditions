// Напиши код в функции f, которая принимает одно число num. Функция должна:
// вернуть строку 'Больше нуля' если num больше нуля
// вернуть строку 'Меньше нуля', если num меньше нуля
// вернуть строку 'Равно нулю', если num равно 0
//
// Используй только if, не используй else

function f(num) {
  if (num > 0) {
    return 'Больше нуля';
  }
  if (num < 0) {
    return 'Меньше нуля';
  }
  if (num === 0) {
    return 'Равно нулю';
  }
}

module.exports = f;
