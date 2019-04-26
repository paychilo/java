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