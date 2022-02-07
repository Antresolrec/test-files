let forms = document.querySelectorAll('.js-form');

function validatiobGroupCheckbox(group) {
    let quantityCheckbox = group.getAttribute('data-quantity');
    let fields = group.querySelectorAll('input');
    let counter = 0;

    fields.forEach(item => {
        if (item.checked) {
            counter++
        }
    })

    return counter < quantityCheckbox;
}

function validationField(field) {
    let parent = field.parentNode;
    let errorClass = 'reference-form__input-container--error';
    let dataValidate = field.getAttribute('data-validate');

    switch (dataValidate) {
        case 'text':
            if (field.value === '') {
                parent.classList.add(errorClass);
                return false
            }
            break
        case 'phone':
            if (field.value === "" || field.value.indexOf('_') !== -1) {
                parent.classList.add(errorClass);
                return false
            }
            break
        case 'email':
            let patternEmail = /^[0-9a-z]([\.-]?\w+)*@[0-9a-z]([\.-]?[0-9a-z])*(\.[0-9a-z]{2,4})+$/;
            let message = field.parentNode.querySelector('.reference-form__error')
            if (field.value === '') {
                message.innerHTML = 'Поле заполнено некорректно'
                parent.classList.add(errorClass);
                return false; // test
            }
            if (field.value.toLowerCase().search(patternEmail) !== 0) {
                message.innerHTML = 'Поле E-mail должно быть действительным'
                parent.classList.add(errorClass);
                return false; // test
            }
            break
        case 'checkbox':
            if (field.checked === false) {
                parent.classList.add(errorClass);
                return false; // test
            }
            break
        case 'group-checkbox':
            if (validatiobGroupCheckbox(field)) {
                field.classList.add(errorClass);
                return false; // test
            }
            break
        case 'pass':
            if (field.value === '') {
                console.log(dataValidate)
                parent.classList.add(errorClass);
                return false; // test
            }
            break
        case 'new-pass-repeat':
            if (field.value === '' || field.value !== field.parentNode.parentNode.parentNode.querySelector('.input--new-pass').value) {
                console.log(dataValidate)
                parent.classList.add(errorClass);
                return false; // test
            }
            break
    }

    return true;
}

forms.forEach(form => {
    form.send = function () {

        let fields = this.querySelectorAll('*[data-validate]');
        let validationArray = [];
        let messageTitle = this.querySelector('.js-form__message-title');
        let messageText = this.querySelector('.js-form__message-text');

        messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
        messageText = messageText ? messageText.innerHTML.trim() : '';

        fields.forEach((item) => {
            let parent = item.parentNode;
            item.classList.remove('reference-form__input-container--error');
            parent.classList.remove('reference-form__input-container--error');
            validationArray.push(validationField(item));
        })

        if (!validationArray.includes(false, 0)) {
            let data = new FormData(this);
            let ajax = new XMLHttpRequest();
            let type = "post";
            let action = this.getAttribute("action") || window.location.href;

            ajax.open(type, action);

            if (type.toLowerCase() === "post") {

                ajax.addEventListener("load", function () {
                    if (ajax.status === 200) {
                        if (ajax.response) {
                            try {
                                const obj = JSON.parse(ajax.response)
                                if (obj.reload === 'y') {
                                    document.location.reload()
                                    // console.log('reload')
                                } else {
                                    if (obj.message || obj.title) {
                                        popupOpen(obj.title ? obj.title : '', obj.message ? obj.message : '');
                                    } else {
                                        popupOpen(messageTitle, messageText);
                                    }
                                }
                            } catch (e) {
                                console.log(e);
                                popupOpen(messageTitle, messageText, true);
                            }
                        } else {
                            popupOpen(messageTitle, messageText, true);
                        }
                    } else {
                        // callback ошибки на сервере
                        // self._callbackError();
                        popupOpen('Ошибка сервера', 'Повторите попытку позже', true);
                    }
                });

                ajax.send(data);
            }
        }
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let fields = this.querySelectorAll('*[data-validate]');
        let validationArray = [];
        let messageTitle = this.querySelector('.js-form__message-title');
        let messageText = this.querySelector('.js-form__message-text');

        messageTitle = messageTitle ? messageTitle.innerHTML.trim() : '';
        messageText = messageText ? messageText.innerHTML.trim() : '';

        fields.forEach((item) => {
            let parent = item.parentNode;
            item.classList.remove('reference-form__input-container--error');
            parent.classList.remove('reference-form__input-container--error');
            validationArray.push(validationField(item));
        })

        if (!validationArray.includes(false, 0)) {
            let data = new FormData(this);
            let ajax = new XMLHttpRequest();
            let type = "post";
            let action = this.getAttribute("action") || window.location.href;

            ajax.open(type, action);

            if (type.toLowerCase() === "post") {

                ajax.addEventListener("load", function () {
                    if (ajax.status === 200) {
                        // callback успешной отправки
                        // self._callbackDone();
                        popupOpen(messageTitle, messageText);
                    } else {
                        // callback ошибки на сервере
                        // self._callbackError();
                        popupOpen('Ошибка сервера', 'Повторите попытку позже');
                    }
                });

                ajax.send(data);
            }
        }
    })
})
