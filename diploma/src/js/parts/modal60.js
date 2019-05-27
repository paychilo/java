function modal60() {
  let popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup_close'),
    link1 = document.querySelectorAll('.phone_link')[0],
    link2 = document.querySelectorAll('.phone_link')[1],
    element = document.querySelector('.popup_form'),
    overlay = document.querySelector('.overlay');
  
   
    link1.addEventListener('click', () => {
      console.log('Да что это за ебаная хуйня?');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target && target.classList.contains('popup_content')) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }
    });});
  

  link2.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Да что это за ебаная хуйня?');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });
  });

  setTimeout(() => {
    if (popup.style.display == 'block') {
      clearTimeout();
    } else {
      popup.style.display = 'block';
      overlay.style.display = 'block';
      popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      });
    }
  }, 3000);
}

module.exports = modal60;