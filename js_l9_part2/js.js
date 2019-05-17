let age = document.getElementById('age'),
    btn = document.getElementsByTagName('button')[0];
class User {
  constructor (surname, name) {
    this.surname = surname;
    this.name = name;
  }
  showUser() {
    let value = age.value;
    console.log(value);
    alert(`Пользователь ${this.surname} ${this.name}, его возраст ${value} лет.`);
  }
}

const Ivan = new User('Petrov', 'Ivan');
Ivan.showUser();