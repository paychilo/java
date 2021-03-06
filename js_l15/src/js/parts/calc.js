function calc() {
  // calculator
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0,
    inputCalc = document.querySelectorAll('input[type="number"]');

  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (+restDays.value < 1 || +persons.value < 1) {
      totalValue.innerHTML = 0;
    } else if (place.options[place.selectedIndex].value == 1) {
      totalValue.innerHTML = total;
    } else if (place.options[place.selectedIndex].value == 1.5) {
      totalValue.innerHTML = total * 1.5;
    } else {
      totalValue.innerHTML = total * 1.8;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (+restDays.value < 1 || +persons.value < 1) {
      totalValue.innerHTML = 0;
    } else if (place.options[place.selectedIndex].value == 1) {
      totalValue.innerHTML = total;
    } else if (place.options[place.selectedIndex].value == 1.5) {
      totalValue.innerHTML = total * 1.5;
    } else {
      totalValue.innerHTML = total * 1.8;
    }
  });

  place.addEventListener('change', function () {
    if (+restDays.value < 1 || +persons.value < 1) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

  for (let i = 0; i < inputCalc.length; i++) { // в инпутах с number вводим только цифры
    inputCalc[i].addEventListener('input', () => {
      inputCalc[i].value = inputCalc[i].value.replace(/[^\d]/g, '');
    });
  }
}

module.exports = calc;