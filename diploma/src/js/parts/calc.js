function calc() {
  let calc = document.querySelector('.popup_calc'),
    glazing = document.querySelector('.glazing'),
    calc2 = document.querySelector('.popup_calc_profile'),
    btn = glazing.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    calcClosePopup = calc.querySelector('.popup_calc_close'),
    nextBtn = calc.querySelectorAll('button')[1],
    nextBtn2 = calc2.querySelectorAll('button')[1],
    weather = calc2.querySelectorAll('input'),
    calc3 = document.querySelector('.popup_calc_end'),
    balconIcons = document.querySelector('.balcon_icons'),
    a = balconIcons.querySelectorAll('img'),
    bigImg = document.querySelector('.big_img'),
    imgs = bigImg.querySelectorAll('img'),
    viewType = document.getElementById('view_type'),
    inputCalc = calc.querySelectorAll('input'),
    statusMessage = document.createElement('div'),
    endBtn = calc3.querySelector('.btn-block'),
    form = calc3.querySelector('.form'),
    endInput = calc3.querySelectorAll('input'),
    close3 = calc3.querySelector('.popup_calc_end_close'),
    close2 = calc2.querySelector('.popup_calc_profile_close');

    let message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с Вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };
  function closeCalc() {
      calcClosePopup.addEventListener('click', () => {
        overlay.style.display = "none";
        calc.style.display = 'none';
      });
      close2.addEventListener('click', () => {
        overlay.style.display = "none";
        calc2.style.display = 'none';
      });
      close3.addEventListener('click', () => {
        overlay.style.display = "none";
        calc3.style.display = 'none';
      });
  }

  function imgChange() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides() {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
      }
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('do_image_more');
      }
      imgs[slideIndex - 1].style.display = 'inline-block';
      imgs[slideIndex - 1].style.textAlign = 'center';

      a[slideIndex - 1].classList.add('do_image_more');
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    balconIcons.addEventListener('click', (event) => {
      event.preventDefault();
      for (let i = 0; i < a.length + 1; i++) {
        if (event.target.classList.contains('tech') && event.target == a[i - 1]) {
          currentSlide(i);
        }
      }
    });
  }

  endInput[1].addEventListener('input', function () {
    endInput[1].value = endInput[1].value.replace(/[^\d]/g, '');
  });

  for (let i = 0; i < inputCalc.length; i++) {
    inputCalc[i].addEventListener('input', function () {
      inputCalc[i].value = inputCalc[i].value.replace(/[^\d]/g, '');
    });
  }

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
      calc.style.display = "block";
      overlay.style.display = "block";
      closeCalc();
      imgChange();
      nextBtn.addEventListener('click', () => {
        let client = {};
        for (let i = 0; i < a.length; i++) {
          if (a[i].classList.contains('do_image_more')) {
            client.variant = i + 1;
          }
        }
        weather[0].addEventListener('change', () => {
          if (weather[1].checked || weather[0].chaked) {
            weather[1].checked = false;
          }
        });
        weather[1].addEventListener('change', () => {
          if (weather[1].checked || weather[0].chaked) {
            weather[0].checked = false;
          }
        });
        client.width = inputCalc[0].value;
        client.height = inputCalc[1].value;
        calc.style.display = 'none';
        calc2.style.display = 'block';
        nextBtn2.addEventListener('click', () => {
          for (let i = 0; i < weather.length; i++) {
            if (weather[i].checked) {
              if (i == 0) {
                client.weather = 'Холодное';
              } else {
                client.weather = 'Теплое';
              }
            }
          }
          if (viewType.selectedIndex == 0) {
            client.type = "tree";
          } else if (viewType.selectedIndex == 1) {
            client.type = "aluminum";
          } else if (viewType.selectedIndex == 2) {
            client.type = "plastic";
          } else if (viewType.selectedIndex == 3) {
            client.type = "french";
          } else {
            client.type = "overhang";
          }
          calc2.style.display = 'none';
          calc3.style.display = 'block';
          endInput[0].addEventListener('change', function () {
            client.name = endInput[0].value;
          });
          endInput[1].addEventListener('change', function () {
            client.phone = endInput[1].value;
          });
          endBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let json = JSON.stringify(client);
            
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            request.onreadystatechange = () => {
              if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
              } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                  statusMessage.innerHTML = message.success;
                } else {
                  statusMessage.innerHTML = message.failure;
                }
              }
            };
            request.send(json);
            form.appendChild(statusMessage);
          });
        });
      });
    });
  }

}

module.exports = calc;