//1. Add

function add(a, b) {
  return a + b;
}

let kata1 = add(2, 4);
console.log(kata1);

//2. Multiply

function multiply(a, b) {
  let count = 0;
  let answer = 0;
  while (count < b) {
    answer = add(a, answer);
    count++; //count = count + 1
  }
  return answer;
}

let kata2 = multiply(6, 4);
console.log(kata2);

//3. Power/Exponentiation

function power(x, n) {
  let count = 0;
  let answer = 1;
  while (count < n) {
    answer = multiply(x, answer);
    count++;
  }
  return answer;
}

let kata3 = power(2, 8);
console.log(kata3);

//4. Factorial

function factorial(x) {
  let count = 0;
  let answer = 1;
  let decrementingNumber = x;
  while (count < x) {
    answer = multiply(decrementingNumber, answer);
    decrementingNumber--; //decrementingNumber = decrementingNumber - 1
    count++;
  }
  return answer;
}

let kata4 = factorial(5);
console.log(kata4);

//Bonus: Fibonacci

function fibonacci(n) {
  let count = 0;
  let fib = [0, 1];
  while (count < n) {
    fib.push(add(fib[count], fib[count + 1]));
    count++;
  }
  return fib[n - 1];
}

let kataBonus = fibonacci(8);
console.log(kataBonus);
