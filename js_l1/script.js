alert('Добрый день! Сейчас откроется несколько всплывающих окон, информацию в которых Вам нужно будет заполнить. Проявите терпение.');
var money = prompt('каков Ваш бюджет на месяц?', 100);
console.log(money);
var time = prompt("Введите дату в формате YYYY-MM-DD", 1990-01-01); 
console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: {},
  savings: false
};

var pos1 = prompt('Введите обязательную статью расходов в этом месце!', 100);
console.log(pos1);
var sum1 = prompt('Во сколько обойдется?', 100);
console.log(sum1);

appData.expenses[pos1] = sum1;

var pos2 = prompt('Введите обязательную статью расходов в этом месце!', 100);
console.log(pos2);
var sum2 = prompt('Во сколько обойдется?', 100);
console.log(sum2);

appData.expenses[pos2] = sum2;

console.log(appData.expenses);

let dayBudget = (appData.budget - sum1 - sum2)/30;
alert('Ваш бюджет на 1 день составляет ' + dayBudget + ' руб.');