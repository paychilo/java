let startBtn = document.getElementById('start'),
    buV = document.getElementsByClassName('budget-value')[0],
    daV = document.getElementsByClassName('daybudget-value')[0],
    leV = document.getElementsByClassName('level-value')[0],
    exV = document.getElementsByClassName('expenses-value')[0],
    oeV = document.getElementsByClassName('optionalexpenses-value')[0],
    inV = document.getElementsByClassName('income-value')[0],
    moV = document.getElementsByClassName('monthsavings-value')[0],
    yeV = document.getElementsByClassName('yearsavings-value')[0],
    expIt = document.getElementsByClassName('expenses-item'),
    validate1 = document.getElementsByTagName('button')[0],
    validate2 = document.getElementsByTagName('button')[1],
    calc = document.getElementsByTagName('button')[2],
    opExIt = document.querySelectorAll('.optionalexpenses-item'),
    choInc = document.getElementById('income'),
    checkbox = document.querySelector('checkbox'),
    chooseSum = document.querySelector('.choose-sum'),
    percentV = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    noMoney = 0;

let money, time;

let appData = {
  budget: money,
  expensis: {},
  income: [],
  timeData: time,
  savings: false,
  optionalExpensis: {},
  checkSavings: function () { // функция подсчета накоплений, работает только при правде в свойстве
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?', "");

      
      alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
    }
  },
};
validate1.disabled = true;
validate2.disabled = true;
calc.disabled = true;


// Кнопка старта (Начать расчет). Нажимаем для старта программы.
startBtn.addEventListener('click', function(){ 
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');
  calc.disabled = false;
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  buV.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});
// Анлок первой кнопки
expIt[0].addEventListener('input', function() {
    if (appData.budget == '' || appData.budget == null || appData.budget == undefined) {
      alert('Нажмите кнопку начать расчет!');
    } else {
      validate1.disabled = false;
    }
});
// анлок второй кнопки
opExIt[0].addEventListener('input', function() {
  if (appData.budget == '' || appData.budget == null || appData.budget == undefined) {
    alert('Нажмите кнопку начать расчет!');
  } else {
    validate2.disabled = false;
  }
});
// Статьи расходов (утвердить №1).
validate1.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expIt.length; i++) { // Цикл из видео
      let a = expIt[i].value,
          b = expIt[++i].value;

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('correct');
        appData.expensis[a] = b;
        sum += +b;

      } else {
        alert('Пожайлуста, заполните все строки!');
        i--; // заставляем заполнить все строки 8)
      }
    } // конец ффункции цикла
    noMoney = sum;
    exV.textContent = sum;
});

//Возможный траты
validate2.addEventListener('click', function() {
  for (let i = 0; i < opExIt.length; i++) {
    let c = opExIt[i].value;
    if ((typeof (c)) === 'string' && (typeof (c)) != null && c != '') {
      appData.optionalExpensis[i] = c;
    } 
    oeV.textContent += appData.optionalExpensis[i] + ' ';
  }
});

//Уровень дохода, бюджет на день.
calc.addEventListener('click', function(){

    if(appData.budget != undefined) {

    appData.moneyPerDay = ((appData.budget - noMoney) / 30).toFixed();
    daV.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      leV.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
      leV.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      leV.textContent = 'Высокий уровень достатка';
    } else {
      leV.textContent = 'Произошла ошибка';
    }
  } else {
    daV.textContent = 'Произошла ошибка';
  }
});

// вводим статьи дохода через запятую
choInc.addEventListener('input', function() {
  let items = choInc.value;
  appData.income = items.split(', ');
  inV.textContent = appData.income;
});

// логика чекбокса
checkbox.addEventListener('click', function(){
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

// сумма и проценты
chooseSum.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +percentV.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    moV.textContent = appData.monthIncome.toFixed(1);
    yeV.textContent = appData.yearIncome.toFixed(1);
  }
});
percentV.addEventListener('input', function() {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +percentV.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    moV.textContent = appData.monthIncome.toFixed(1);
    yeV.textContent = appData.yearIncome.toFixed(1);
  }
});



// appData.chooseIncome();

// appData.income.forEach(function (item, i) {
//   i++;
//   console.log('Способы доп. заработка: ' + i + ' - ' + item);
// });

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }