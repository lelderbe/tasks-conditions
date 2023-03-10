// Напиши код в функции f, которая принимает два числа a и b. Функция должна:
// вернуть строку 'Условие верно', когда: либо a - чётное число, либо b - чётное число
// в остальных случаях вернуть строку 'Условие неверно'

function f(a, b) {
  if (a % 2 === 0 || b % 2 === 0) {
    return 'Условие верно';
  }

  return 'Условие неверно';
}

// Условие верно
f(2, 2); // а - чётное, b - чётное
f(2, 3); // а - чётное, b - нечётное
f(3, 2); // а - нечётное, b - чётное

// Условие неверно
f(3, 5); // а - нечётное, b - нечётное

module.exports = f;
