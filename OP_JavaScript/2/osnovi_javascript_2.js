//exercise 1
let answer,
  count = 0;

answer = prompt("Скільки буде 2 + 2");
if (answer == 4) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2 - 2");
if (answer == 0) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2 * 2");
if (answer == 4) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2 / 2");
if (answer == 1) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2 у ступіні 2");
if (answer == 4) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Залишок від діління 2 / 2");
if (answer == 0) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2!");
if (answer == 2) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("Скільки буде 2 - 2 + 2 * 2 / 2");
if (answer == 2) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("скільки пальців у героїв мультиків 4 чи 5");
if (answer == 4) {
  console.log("Відповідь вірна");
  count++;
}

answer = prompt("що означає 4.5.0");
if (
  answer.toLowerCase() == "все спокійно" ||
  answer.toLowerCase() == "все спокойно"
) {
  console.log("Відповідь вірна");
  count++;
}

console.log(`Кількість правильних відповідей ${count} з 10`);

if (count >= 0 && count <= 2) console.log("Дуже погано");
else if (count > 2 && count <= 4) console.log("Погано");
else if (count > 4 && count <= 7) console.log("Добре");
else if (count > 7 && count <= 9) console.log("Дуже добре");
else console.log("Відмінно");

//exercise 2
const login = prompt(`Введіть «Імя»`);

if (login == null) alert("Вхід скасований");
else if (login != "Імя") alert("Я вас не знаю");
else {
  const pass = prompt("Введіть пароль");

  if (pass == "ЛОГОС") alert("Ласкаво просимо!");
  else if (pass == null) alert("Вхід скасований");
  else alert("Пароль невірний");
}

//exercise 3

const month = prompt("Введіть число від 1 до 12");

if ((month >= 1 && month <= 2) || month == 12) alert("Зима");
else if (month > 2 && month <= 5) alert("Весна");
else if (month > 5 && month <= 8) alert("Літо");
else if (month > 8 && month <= 11) alert("Осінь");
else alert("Не можливо визначити");
