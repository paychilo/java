function tabs() {
  let slider = document.querySelector('.glazing_slider'),
  slideIndex = 1,
  tree = document.querySelectorAll('.container')[2],
  links = slider.getElementsByTagName('a'),
  noPadding = tree.getElementsByClassName('row');

  showSlides(slideIndex);

  function showSlides() {
    for (let i = 0; i < noPadding.length; i++) {
      noPadding[i].style.display = 'none';
    }
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    noPadding[slideIndex - 1].style.display = 'block';
    links[slideIndex -1].classList.add('active');
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  slider.addEventListener('click',  (event) => {
    for (let i = 0; i < links.length + 1; i++) {
      if (event.target.classList.contains('links') && event.target == links[i - 1]) {
        currentSlide(i);
      }
    }
  });

}

module.exports = tabs;