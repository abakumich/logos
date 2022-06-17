// 👉 Завдання 1:
// — Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// 1. Користувач вводить число в prompt
// 2. Після введення числа вистрибує алерт з оголошенням пори року до якої
// відноситься число(номер місяця) що ввів користувач.
// 3. Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

const month = +prompt("Введіть число від 1 до 12");

switch (month) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Літо");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осінь");
    break;
  default:
    alert("Не можливо визначити");
    break;
}

// 👉 Завдання 2:

// — Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Створити функцію яка буде приймати одне число.
// 2. В середині функції перевіряємо чи це число є простим.

// 3. Після перевірки виводимо повідомлення в console.log().

function primeNumber(num) {
  if (num > 0 && !(num % 1)) {
    let prime = true;
    //перевірка якщо число парне, то воно одразу не просте
    if (!(num % 2) && num !== 2) prime = false;
    else {
      let divider = 3,
        //ділимо перевіряєме число num на числа від 3 до корень квадратний з num
        condition = Math.ceil(Math.sqrt(num));
      while (divider < condition + 1) {
        if (!(num % divider)) {
          prime = false;
          console.log(divider);
          break;
        }
        divider++;
      }
    }
    prime
      ? console.log(`Число ${num} просте`)
      : console.log(`Число ${num} складове`);
  } else console.log(`Введено не коректне значення`);
}

primeNumber(+prompt());

// 👉 Завдання 3:
// — Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2. Кількість параметрів у функції може бути від 2х і більше.

//Зробив 3 варінти, який кращий? Чи може є більше правильне рішення?
//Варіант 1
function max(...arg) {
  let result = arg[0];
  for (let i = 1; i < arg.length; i++) {
    if (arg[i] > result) result = arg[i];
  }
  return result;
}

//Варіант 2
function max(a, b, ...arg) {
  let result;
  a > b ? (result = a) : (result = b);
  if (arg.length) {
    for (let i = 1; i < arg.length; i++) {
      if (arg[i] > result) result = arg[i];
    }
  }
  return result;
}

//Варіант 3
function max() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > result) result = arguments[i];
  }
  return result;
}

console.log(max(5, -2, 30, 6, -40, 50));
