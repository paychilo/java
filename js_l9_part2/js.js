let usAge = document.getElementById('age'),
    btn = document.querySelector('button');
    

let value = usAge.value;    
class User {
  constructor(surname, name) {
    this.surname = surname;
    this.name = name;
    this.value = value;
  }
}
let ivan = new User('Ivanov', 'Vasiliy');

class showUser {
  constructor(surname, name) {
    this.value = usAge.value;
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  }
}


// btn.addEventListener('click', );

console.log(ivan)

