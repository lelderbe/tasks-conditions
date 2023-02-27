// Перед тобой стена с прямоугольным отверстием в ней. Её размеры: a и b
// У тебя в руках кирпич... Его размеры: x, y, z
// Напиши код в функции, который будет возвращать:
// true, если кирпич пройдёт через отверстие
// false - если он слишком крупный и не пройдёт

function f(a, b, x, y, z) {
  function checkSize(a, b, x, y) {
    return (a >= x && b >= y) || (a >= y && b >= x);
  }

  return checkSize(a, b, x, y) || checkSize(a, b, x, z) || checkSize(a, b, y, z);
}

module.exports = f;
