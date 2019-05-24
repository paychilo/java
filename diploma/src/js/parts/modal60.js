function modal60() {
  let popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup_close'),
    overlay = document.querySelector('.overlay');

    function removeTest(e) {
      if(!e.target.matches('.popup_form, .popup_form *')) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
      }
  };
  
  window.addEventListener('click', removeTest);

  setTimeout(() => {
    window.addEventListener('click', removeTest);
    popup.style.display = 'block';
    overlay.style.display = 'block';
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    });

  }, 60000);
}

module.exports = modal60;