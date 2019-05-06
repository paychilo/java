let navbar = document.querySelector('.menu'),
    newLi = document.createElement('li'),
    adv = document.querySelector('.adv'),
    div = document.getElementsByTagName('div'),
    title = document.getElementById('title'),
    item = document.getElementsByClassName('menu-item'),
    quest = document.getElementById('prompt');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)'; //Меняем фон

navbar.insertBefore(item[2], item[1]);
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
navbar.appendChild(newLi);

adv.remove();

title.innerHTML = 'Мы продаем только подлинную технику Apple';

let qu = prompt('Ваше отношение к технике Apple?', '');
quest.innerHTML = qu ;