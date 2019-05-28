function modal60() {
  let popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup_close'),
    overlay = document.querySelector('.overlay');
  

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
      popup.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('popup')) {
          overlay.style.display = "none";
          popup.style.display = 'none';
        }
      });
    }
  }, 60000);
}

module.exports = modal60;