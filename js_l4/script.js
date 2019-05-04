// let options = {
//   width: 1024,
//   height: 1024,
//   name: 'test'
// };

// options.bool = false;
// options.colors = {
//   border: 'black',
//   bg: 'red'
// };

// delete options.bool;


// for (let key in options) {
//     console.log('Свойство ' + key + " Имеет значение " + options[key])
// ;}

// console.log(Object.keys(options).length);


// let arr = [1,2,3,4,5];

// for (let i = 0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// arr.forEach(function(item, i, arr) {
//     console.log(i + ': ' + item + ' (массив: ' + mass +')');
// });

// console.log(arr);


// let mass = [1,3,4,6,7];


// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');

/* let arr = ['dsfsdf', 'sdfsdf', 'sdf'],
    i = arr.join(', ');
console.log(i); */

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
    optionalExpensis: {},
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
      if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
      }  else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
      } else {
        console.log('Произошла ошибка');
      }
    },
    checkSavings: function () { // функция подсчета накоплений, работает только при правде в свойстве
      if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?',"");
    
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome) ;   
      }
    },
    chooseOptExpenses: function () {
      for (let i = 0; i < 3; i++) {
        let c = prompt('Статья необязательных расходов?', '');
        if ( (typeof(c))=== 'string' && (typeof(c)) != null && c != '') {
          appData.optionalExpensis[i] = c;
        } else {
          alert('Пожайлуста, заполните все строки!');
          i--;
        }
      }
      console.log(appData.optionalExpensis);
    },
    chooseIncome: function() {
      for (let i = 0; i < 1; i++) {
      let items = prompt('Что принесет доп доход? (веречислите через запятую)', '');
      if ( (typeof(items))=== 'string' && (typeof(items)) != null && items != '') {
        appData.income = items.split(", ");
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
      } else {
        alert('Пожайлуста, заполните все строки!');
         i--;
        }
      }
    }
};

appData.chooseIncome();

appData.income.forEach(function(item, i) {
  i++;
  console.log('Способы доп. заработка: ' + i + ' - ' + item );
});

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}