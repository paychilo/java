function modal() {
  // modal window more
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  // modal in blocks

  let modalBlocks = document.querySelectorAll('.description-btn'),
    blocks = document.querySelectorAll('.description');

  for (let i = 0; i < modalBlocks.length; i++) {
    modalBlocks[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  }
}

module.exports = modal;