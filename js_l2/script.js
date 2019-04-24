let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expensis: {},
    income: [],
    timeData: time,
    savings: false
};
// Цикл из видео
for (let i = 0; i < 2; i++) {
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
}
// второй вариант
var n = 0;
while (n < 2) {
  n++;
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = +prompt('Во сколько обойдется?', '');
    
  if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
  && a != '' && b != '' && a.length < 50) {
    console.log('correct');
    appData.expensis[a] = b;
  } else {
    alert('Пожайлуста, заполните все строки!'); 
    n--;
  }  
}
// Третий вариант
var z = 0;
do {
  z++;
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = +prompt('Во сколько обойдется?', '');
    
  if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
  && a != '' && b != '' && a.length < 50) {
    console.log('correct');
    appData.expensis[a] = b;
  } else {
    alert('Пожайлуста, заполните все строки!'); 
    z--;
  }  
} while (z < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
}  else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}