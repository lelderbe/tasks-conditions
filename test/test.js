const task01 = require('../src/task01');
const task02 = require('../src/task02');
const task03 = require('../src/task03');
const task04 = require('../src/task04');
const task05 = require('../src/task05');
const task06 = require('../src/task06');
const task07 = require('../src/task07');
const task08 = require('../src/task08');
const task09 = require('../src/task09');
const task10 = require('../src/task10');
const task11 = require('../src/task11');
const task12 = require('../src/task12');
const task13 = require('../src/task13');
// const task01 = require('../src/xsolution01');
// const task02 = require('../src/xsolution02');
// const task03 = require('../src/xsolution03');
// const task04 = require('../src/xsolution04');
// const task05 = require('../src/xsolution05');
// const task06 = require('../src/xsolution06');
// const task07 = require('../src/xsolution07');
// const task08 = require('../src/xsolution08');
// const task09 = require('../src/xsolution09');
// const task10 = require('../src/xsolution10');
// const task11 = require('../src/xsolution11');
// const task12 = require('../src/xsolution12');
// const task13 = require('../src/xsolution13');

describe('task01', () => {
  test('1 should return "Больше нуля" - граничное условие: минимально подходящее под условие 1', () => {
    const result = task01(1);
    const expected = 'Больше нуля';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Меньше нуля" - граничное условие: минимально подходящее под условие 2', () => {
    const result = task01(-1);
    const expected = 'Меньше нуля';
    expect(result).toEqual(expected);
  });

  test('0 should return undefined - единственное, НЕ подходящее под оба условия', () => {
    const result = task01(0);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});

describe('task02', () => {
  test('1 should return "Больше нуля" - граничное условие: минимально подходящее под условие 1', () => {
    const result = task02(1);
    const expected = 'Больше нуля';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Меньше нуля" - граничное условие: минимально подходящее под условие 2', () => {
    const result = task02(-1);
    const expected = 'Меньше нуля';
    expect(result).toEqual(expected);
  });

  test('0 should return "Равно нулю" - единственное, НЕ подходящее под оба условия', () => {
    const result = task02(0);
    const expected = 'Равно нулю';
    expect(result).toEqual(expected);
  });
});

describe('task03', () => {
  test('1 should return "Больше нуля" - граничное условие: минимально подходящее под условие 1', () => {
    const result = task03(1);
    const expected = 'Больше нуля';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Меньше нуля" - граничное условие: минимально подходящее под условие 2', () => {
    const result = task03(-1);
    const expected = 'Меньше нуля';
    expect(result).toEqual(expected);
  });

  test('0 should return "Равно нулю" - единственное, НЕ подходящее под оба условия', () => {
    const result = task03(0);
    const expected = 'Равно нулю';
    expect(result).toEqual(expected);
  });
});

describe('task04', () => {
  test('1 should return "Условие 1 верно" - граничное условие: минимально подходящее под условие 1', () => {
    const result = task04(1);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('10 should return "Условие 1 верно"', () => {
    const result = task04(10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-6 should return "Условие 1 верно" - граничное условие: минимально подходящее под условие 1', () => {
    const result = task04(-6);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-10 should return "Условие 1 верно"', () => {
    const result = task04(-10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Условие 2 верно" - подходит только под условие 2', () => {
    const result = task04(-1);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('0 should return undefined - граничное условие - минимально не подходящее для диапазона больше 0', () => {
    const result = task04(0);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('-5 should return undefined - граничное условие - минимально не подходящее для диапазона меньше -5', () => {
    const result = task04(-5);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('-2 should return undefined', () => {
    const result = task04(-2);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});

describe('task05', () => {
  test('1 should return "Условие 1 верно"', () => {
    const result = task05(1);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('10 should return "Условие 1 верно"', () => {
    const result = task05(10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-6 should return "Условие 1 верно"', () => {
    const result = task05(-6);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-10 should return "Условие 1 верно"', () => {
    const result = task05(-10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Условие 2 верно"', () => {
    const result = task05(-1);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('-3 should return "Условие 2 верно"', () => {
    const result = task05(-3);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('0 should return undefined', () => {
    const result = task05(0);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('-5 should return undefined', () => {
    const result = task05(-5);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('-2 should return undefined', () => {
    const result = task05(-2);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});

describe('task06', () => {
  test('0 should return "Условие 1 верно"', () => {
    const result = task06(0);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('10 should return "Условие 1 верно"', () => {
    const result = task06(10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('5 should return "Условие 1 верно"', () => {
    const result = task06(5);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('20 should return "Условие 2 верно"', () => {
    const result = task06(20);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('30 should return "Условие 2 верно"', () => {
    const result = task06(30);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('25 should return "Условие 2 верно"', () => {
    const result = task06(25);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('-1 should return undefined', () => {
    const result = task06(-1);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('15 should return undefined', () => {
    const result = task06(15);
    const expected = undefined;
    expect(result).toEqual(expected);
  });

  test('31 should return undefined', () => {
    const result = task06(31);
    const expected = undefined;
    expect(result).toEqual(expected);
  });
});

describe('task07', () => {
  test('0 should return "Условие 1 верно"', () => {
    const result = task07(0);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('10 should return "Условие 1 верно"', () => {
    const result = task07(10);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('5 should return "Условие 1 верно"', () => {
    const result = task07(5);
    const expected = 'Условие 1 верно';
    expect(result).toEqual(expected);
  });

  test('20 should return "Условие 2 верно"', () => {
    const result = task07(20);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('30 should return "Условие 2 верно"', () => {
    const result = task07(30);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('25 should return "Условие 2 верно"', () => {
    const result = task07(25);
    const expected = 'Условие 2 верно';
    expect(result).toEqual(expected);
  });

  test('-1 should return "Условия 1 и 2 не подошли"', () => {
    const result = task07(-1);
    const expected = 'Условия 1 и 2 не подошли';
    expect(result).toEqual(expected);
  });

  test('15 should return "Условия 1 и 2 не подошли"', () => {
    const result = task07(15);
    const expected = 'Условия 1 и 2 не подошли';
    expect(result).toEqual(expected);
  });

  test('31 should return "Условия 1 и 2 не подошли"', () => {
    const result = task07(31);
    const expected = 'Условия 1 и 2 не подошли';
    expect(result).toEqual(expected);
  });
});

describe('task08', () => {
  test('a = 2, b = 2 should return "Условие верно"', () => {
    const result = task08(2, 2);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 2, b = 3 should return "Условие верно"', () => {
    const result = task08(2, 3);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 2 should return "Условие верно"', () => {
    const result = task08(3, 2);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 5 should return "Условие неверно"', () => {
    const result = task08(3, 5);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });
});

describe('task09', () => {
  test('a = 2, b = 2 should return "Условие верно"', () => {
    const result = task09(2, 2);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 2, b = 3 should return "Условие неверно"', () => {
    const result = task09(2, 3);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 2 should return "Условие неверно"', () => {
    const result = task09(3, 2);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 5 should return "Условие неверно"', () => {
    const result = task09(3, 5);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });
});

describe('task10', () => {
  test('a = 5, b = 20, c = -1 should return "Условие верно"', () => {
    const result = task10(5, 20, -1);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 15, b = 20, c = -1 should return "Условие верно"', () => {
    const result = task10(15, 20, -1);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 5, b = 30, c = -1 should return "Условие верно"', () => {
    const result = task10(5, 30, -1);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 15, b = 30, c = -1 should return "Условие неверно"', () => {
    const result = task10(15, 30, -1);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 5, b = 20, c = 0 should return "Условие неверно"', () => {
    const result = task10(5, 20, 0);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });
});

describe('task11', () => {
  test('a = 5, b = 20, c = -1 should return "Условие верно"', () => {
    const result = task11(5, 20, -1);
    const expected = 'Условие верно';
    expect(result).toEqual(expected);
  });

  test('a = 15, b = 20, c = -1 should return "Условие неверно"', () => {
    const result = task11(15, 20, -1);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 5, b = 30, c = -1 should return "Условие неверно"', () => {
    const result = task11(5, 30, -1);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 15, b = 30, c = -1 should return "Условие неверно"', () => {
    const result = task11(15, 30, -1);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });

  test('a = 5, b = 20, c = 0 should return "Условие неверно"', () => {
    const result = task11(5, 20, 0);
    const expected = 'Условие неверно';
    expect(result).toEqual(expected);
  });
});

describe('task12', () => {
  test('a = 1, b = 2 should return 1', () => {
    const result = task12(1, 2);
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test('a = 2, b = 1 should return 1', () => {
    const result = task12(2, 1);
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test('a = 1, b = 3 should return 1', () => {
    const result = task12(1, 3);
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 1 should return 1', () => {
    const result = task12(3, 1);
    const expected = 1;
    expect(result).toEqual(expected);
  });

  test('a = -13, b = 17 should return -13', () => {
    const result = task12(-13, 17);
    const expected = -13;
    expect(result).toEqual(expected);
  });

  test('a = -13, b = -17 should return -17', () => {
    const result = task12(-13, -17);
    const expected = -17;
    expect(result).toEqual(expected);
  });
});

describe('task13', () => {
  test('a = 1, b = 1, x = 1, y = 1, z = 1 should return true', () => {
    const result = task13(1, 1, 1, 1, 1);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 1, b = 1, x = 2, y = 2, z = 2 should return false', () => {
    const result = task13(1, 1, 2, 2, 2);
    const expected = false;
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 1, x = 1, y = 2, z = 1 should return true', () => {
    const result = task13(3, 1, 1, 2, 1);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 1, x = 1, y = 4, z = 1 should return true', () => {
    const result = task13(3, 1, 1, 4, 1);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 1, x = 2, y = 4, z = 2 should return false', () => {
    const result = task13(3, 1, 2, 4, 2);
    const expected = false;
    expect(result).toEqual(expected);
  });

  test('a = 1, b = 1, x = 2, y = 1, z = 1 should return true', () => {
    const result = task13(1, 1, 2, 1, 1);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 1, b = 1, x = 1, y = 2, z = 1 should return true', () => {
    const result = task13(1, 1, 1, 2, 1);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 1, b = 1, x = 1, y = 1, z = 2 should return true', () => {
    const result = task13(1, 1, 1, 1, 2);
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('a = 3, b = 2, x = 1, y = 4, z = 4 should return false', () => {
    const result = task13(3, 2, 1, 4, 4);
    const expected = false;
    expect(result).toEqual(expected);
  });
});
