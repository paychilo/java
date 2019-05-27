function tabs2() {
  let slider = document.querySelector('.decoration_slider'),
    slideIndex = 1,
    tabs = document.querySelectorAll('.decoration_content_tab'),
    links = slider.getElementsByTagName('a'),
    noClick = slider.getElementsByClassName('no_click');

  console.log(tabs);
  console.log(links);

  showSlides(slideIndex);

  function showSlides() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }
    for (let i = 0; i < noClick.length; i++) {
      noClick[i].classList.remove('after_click');
    }

    tabs[slideIndex - 1].style.display = 'block';
    noClick[slideIndex - 1].classList.add('after_click');
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

module.exports = tabs2;