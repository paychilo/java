function pict() {
  let pict = document.querySelector('.works'),
    href = pict.getElementsByTagName('a'),
    overlay = document.getElementsByClassName('overlay')[0],
    div = document.createElement('div');
  
    href[0].addEventListener('click', function (event) {
      event.preventDefault();
      div.innerHTML = `<img src="img/our_works/big_img/1.png" alt="">`;
      div.classList.add('img_pict');
      pict.appendChild(div);
      overlay.style.display = 'block';
      div.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('img_pict')) {
          overlay.style.display = "none";
          div.remove();
        }
      });
    });
  
    href[1].addEventListener('click', function (event) {
      event.preventDefault();
      div.innerHTML = `<img src="img/our_works/big_img/2.png" alt="">`;
      div.classList.add('img_pict');
      pict.appendChild(div);
      overlay.style.display = 'block';
      div.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('img_pict')) {
          overlay.style.display = "none";
          div.remove();
        }
      });
    });
}

module.exports = pict;