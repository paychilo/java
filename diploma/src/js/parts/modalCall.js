function modalCall() {
  let modal = document.querySelector('.popup_engineer'),
    btn = document.querySelector('.header_btn'),
    overlay = document.querySelector('.overlay'),
    closeBtn = modal.querySelector('.popup_close');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
  modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup_engineer')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
});
    
  
}

module.exports = modalCall;