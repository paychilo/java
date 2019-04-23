alert('Добрый день! Сейчас откроется несколько всплывающих окон, информацию в которых Вам нужно будет заполнить. Проявите терпение.');
var money = prompt('каков Ваш бюджет на месяц?', 100);
console.log(money);
var time = prompt("Введите дату в формате YYYY-MM-DD", 1990-01-01); 
console.log(time);

let appData = {
  budget: money,
  timeData: time,
  expenses: {}
};

var pos1 = prompt('Введите обязательную статью расходов в этом месце!', 100);
console.log(pos1);
var sum1 = prompt('Во сколько обойдется?', 100);
console.log(sum1);

appData.expenses[pos1] = sum1;

console.log(expenses);