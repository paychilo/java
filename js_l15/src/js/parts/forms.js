function forms() {
  // Form + main Form

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
    formEmail = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    inputEmail = formEmail.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    inputPhone = document.querySelectorAll('input[type="tel"]');

  for (let i = 0; i < inputPhone.length; i++) { // в инпутах с телефоном вводим только цифры и +
    inputPhone[i].addEventListener('input', () => {
      inputPhone[i].value = inputPhone[i].value.replace(/[^+\d]/g, '');
    });
  }

  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise((resolve, reject) => {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          request.onreadystatechange = () => {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                resolve();
              } else {
                reject();
              }
            }
          }
          request.send(data);
        })
      }

      function clearInputEmail() {
        for (let i = 0; i < inputEmail.length; i++) {
          inputEmail[i].value = '';
        }
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.success)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(() => {
          clearInput();
          clearInputEmail();
        });

    });
  }
  sendForm(form);
  sendForm(formEmail);
}

module.exports = forms;