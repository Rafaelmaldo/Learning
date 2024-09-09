function myFactorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}

console.log('return of factorial :>> ', factorial(5))