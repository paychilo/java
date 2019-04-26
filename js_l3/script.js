let money, time;

function start() { // функция заполнения стартовых параметров
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

// start();

let appData = {
    budget: money,
    expensis: {},
    income: [],
    timeData: time,
    savings: true,
    optionalExpensis: {}
};

function chooseOptExpenses() {
  for (let y = 0, h = 0; y < 3; y++) {
    h++;
    let c = prompt('Статья необязательных расходов?');
    if ( (typeof(c))=== 'string' && (typeof(c)) != null && c != '') {
      appData.optionalExpensis[h] = c;
    } else {
      alert('Пожайлуста, заполните все строки!');
      h--;
      y--;
    }
  }
  console.log(appData.optionalExpensis);
}

chooseOptExpenses();

function chooseExpenses() {  // функция заполнения обязательных расходов
  for (let i = 0; i < 2; i++) {  // Цикл из видео
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
      console.log('correct');
      appData.expensis[a] = b;
    } else {
      alert('Пожайлуста, заполните все строки!'); 
      i--; // заставляем заполнить все строки 8)
    }  
  } // конец ффункции
}
// chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

// detectDayBudget();

function detectLevel () {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  }  else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectLevel();


function checkSavings() { // функция подсчета накоплений, работает только при правде в свойстве
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt('Под какой процент?',"");

    appData.monthIncome = save/100/12*percent;
    alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome) ;   
  }
}

// checkSavings();

