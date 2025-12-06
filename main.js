// 简单计算器程序
function calculator(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : '错误：不能除以零';
    default:
      return '错误：未知操作';
  }
}

// 测试计算器
console.log('10 + 5 =', calculator(10, 5, '+'));
console.log('10 - 3 =', calculator(10, 3, '-'));
console.log('6 * 7 =', calculator(6, 7, '*'));
console.log('20 / 4 =', calculator(20, 4, '/'));
console.log('15 / 0 =', calculator(15, 0, '/'));