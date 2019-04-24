if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
}  else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка')
}