function forms() {
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };

  let popup = document.querySelector('.popup_form'),
    popupFrom = popup.querySelector('.form'),
    popupEngineer = document.querySelector('.popup_engineer'),
    popupEngineerForm = popupEngineer.querySelector('.form'),
    statusMessage = document.createElement('div'),
    inputName = document.querySelectorAll('input[name="user_name"]'),
    inputPhone = document.querySelectorAll('input[type="tel"]');
  
  for (let i = 0; i < inputPhone.length; i++) { // в инпутах с телефоном вводим только цифры и +
    inputPhone[i].addEventListener('input', () => {
      inputPhone[i].value = inputPhone[i].value.replace(/[^+\d]/g, '');
    });
  }

  function sendForm(elem) {
    elem.addEventListener('submit', (e) => {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      let obj ={};
      formData.forEach(function(value, key) {
        obj[key] = value;
      });
       let json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(() => {
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
          clearInput();
          clearInputEmail();
        });
      }

      function clearInputEmail() {
        for (let i = 0; i < inputName.length; i++) {
          inputName[i].value = '';
        }
      }

      function clearInput() {
        for (let i = 0; i < inputPhone.length; i++) {
          inputPhone[i].value = '';
        }
      }

      postData(formData);

    });
  }
  sendForm(popupFrom);
  sendForm(popupEngineerForm);
}

module.exports = forms;