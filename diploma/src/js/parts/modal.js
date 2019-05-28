function modalPopup() {
  let phoneLinks = document.querySelectorAll('.phone_link'),
    overlay = document.querySelector('.overlay'),
    popup = document.querySelector('.popup'),
    closeBtn = popup.querySelector('.popup_close');

  console.log(phoneLinks);

  for (let i = 0; i < phoneLinks.length; i++) {
    phoneLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      console.log('salypa');
      popup.style.display = 'block';
      overlay.style.display = 'block';
      closeBtn.addEventListener('click', () => {
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
    });
  }
}

module.exports = modalPopup;