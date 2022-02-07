// quizData
const quizData = [{
    number: 1,
    title: "стратегические особенности",
    answer_alias: "strategy",
    answers: [{
        answer_title: "Сайт разработан, либо обновлялся по дизайну и контенту не более 2-х лет назад",
        type: "radio"
    },
    {
        answer_title: "К каждой товарной позиции есть своя посадочная страница с полным техническим описанием продукта, качественным фото, ценой (либо условиями заказа), условиями оплаты, доставки + отправки в другие регионы",
        type: "radio"
    },
    {
        answer_title: "Сайт разработан, либо обновлялся по дизайну и контенту не более 2-х лет назад",
        type: "radio"
    }
    ]
},
{
    number: 2,
    title: "функиональные особенности",
    answer_alias: "functional",
    answers: [{
        answer_title: "Сайт разработан, либо обновлялся по дизайну и контенту не более 2-х лет назад",
        type: "radio"
    },
    {
        answer_title: "К каждой товарной позиции есть своя посадочная страница с полным техническим описанием продукта, качественным фото, ценой (либо условиями заказа), условиями оплаты, доставки + отправки в другие регионы",
        type: "radio"
    },
    {
        answer_title: "К каждой товарной позиции есть своя посадочная страница с полным техническим описанием продукта, качественным фото, ценой (либо условиями заказа), условиями оплаты, доставки + отправки в другие регионы",
        type: "radio"
    }
    ]
},
{
    number: 3,
    title: "особенности продвижение",
    answer_alias: "promotion",
    answers: [{
        answer_title: "К каждой товарной позиции есть своя посадочная страница с полным техническим описанием продукта, качественным фото, ценой (либо условиями заказа), условиями оплаты, доставки + отправки в другие регионы",
        type: "radio"
    },
    {
        answer_title: "К каждой товарной позиции есть своя посадочная страница с полным техническим описанием продукта, качественным фото, ценой (либо условиями заказа), условиями оплаты, доставки + отправки в другие регионы",
        type: "radio"
    },
    {
        answer_title: "Сайт разработан, либо обновлялся по дизайну и контенту не более 2-х лет назад",
        type: "radio"
    }
    ]
},
{
    number: 4,
    title: "Оставьте заявку",
    answer_alias: "request",
    answers: [{
        // answer_title: "Введите телефон",
        type: "text",
        placeholder: "Имя"
    },
    {
        // answer_title: "mail",
        type: "email",
        placeholder: "Email*"

    },
    {
        // answer_title: "phone",
        type: "tel",
        placeholder: "Телефон"
    },
    ]
}
];
// quizData



const quiz = document.querySelector('.quiz');
if (quiz) {
    const quizTemplate = (data = [], dataLength, options) => {
        const { number, title } = data;
        const { nextBtnText } = options;
        const answers = data.answers.map(item => {
            return `
            
                <label class="quiz-question__label">
                    <input type="${item.type}" placeholder="${item.placeholder}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" value="${item.type == 'radio' ? item.answer_title : ''}">
                    <span>${item.answer_title}</span>
                </label>
    
            `;
        });

        return `
        
            <div class="quiz__content">
                <div class="quiz-question">
                    <h3 class="quiz-question__title">${title}</h3>
                    <div class="quiz-question__answers">
                        ${answers.join('')}
                    </div>
                </div>
                    <div class="quiz__questions"><span>0${number}</span> / 0${dataLength}</div>
                    <button type="button" class="quiz-question__btn btn" data-next-btn>${nextBtnText}<span></span></button>
            </div>
        
        `;
    };


    // const quiz = document.querySelector('.quiz');
    // quiz.innerHTML = quizTemplate(quizData[0], quizData.length);

    class Quiz {
        constructor(selector, data, options) {
            this.$el = document.querySelector(selector);
            this.options = options;
            this.data = data;
            this.counter = 0;
            this.dataLength = this.data.length;
            this.resultArray = [];
            this.tmp = {};
            this.init();
            this.events();
        }

        init() {
            console.log('init!');
            this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
        }

        events() {
            this.$el.addEventListener('click', (e) => {
                if (e.target == document.querySelector('[data-next-btn]')) {
                    this.addToSend();
                    this.nextQuestion();

                }

                if (e.target == document.querySelector('[data-send]')) {
                    this.send();
                }
            });

            this.$el.addEventListener('change', (e) => {
                if (e.target.tagName == 'INPUT') {
                    if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
                        let elements = this.$el.querySelectorAll('input');

                        elements.forEach(el => el.checked = false);
                    }

                    this.tmp = this.serialize(this.$el);
                }
            });
        }

        nextQuestion() {
            if (this.valid()) {
                console.log('next question!');
                if (this.counter + 1 < this.dataLength) {
                    this.counter++;
                    this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

                    let stepFunctional = document.querySelector('.step-title-functional');
                    let stepPromotion = document.querySelector('.step-title-promotion');
                    let stepResult = document.querySelector('.step-title-result');
                    if (this.counter + 1 == this.dataLength) {
                        this.$el.insertAdjacentHTML('beforeend', `<button type="button" class="quiz-question__btn btn" data-send>${this.options.sendBtnText}<span></span></button>`);
                        this.$el.querySelector('[data-next-btn]').remove();
                    }
                    if (this.counter == 1) {
                        stepFunctional.classList.add('step-title-active');
                    }
                    if (this.counter == 2) {
                        stepPromotion.classList.add('step-title-active');
                    }
                    if (this.counter == 3) {
                        stepResult.classList.add('step-title-active');
                        var fraction = document.querySelector('.quiz__questions');
                        fraction.classList.add('fraction-active');
                        let stepFourText = document.querySelectorAll('.quiz-question__label span');
                        stepFourText.forEach((el) => {
                            el.style.display = 'none';
                        })
                        let stepFourTitle = document.querySelector('.quiz-question__title');
                        stepFourTitle.style.display = 'block';
                        let btnArrow = document.querySelector('.quiz-question__btn');
                        btnArrow.style.backgroundImage = 'none';
                    }
                }
            }
        }

        valid() {
            let isValid = false;
            let elements = this.$el.querySelectorAll('input');
            elements.forEach(el => {
                switch (el.type) {
                    // case 'text':
                    //     (el.value) ? isValid = true : el.classList.add('error');
                    case 'email':
                        (el.value) ? isValid = true : el.classList.add('error');
                    case 'checkbox':
                        (el.checked) ? isValid = true : el.classList.add('error');
                    case 'radio':
                        (el.checked) ? isValid = true : el.classList.add('error');
                }
            });

            return isValid;
        }

        addToSend() {
            this.resultArray.push(this.tmp);
        }

        send() {
            if (this.valid()) {
                console.log('send!');

                let elements = this.$el.querySelectorAll('input');
                elements.forEach(el => el.classList.remove('error'));


                const formData = new FormData();

                for (let item of this.resultArray) {
                    for (let obj in item) {
                        formData.append(obj, item[obj].substring(0, item[obj].length - 1))
                    }
                }

                const response = fetch('mail.php', {
                    method: 'POST',
                    body: formData
                });
            }
        }

        serialize(form) {
            let field, s = {};
            let valueString = '';
            if (typeof form == 'object' && form.nodeName == "FORM") {
                let len = form.elements.length;
                for (let i = 0; i < len; i++) {
                    field = form.elements[i];

                    if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                        if (field.type == 'select-multiple') {
                            for (j = form.elements[i].options.length - 1; j >= 0; j--) {
                                if (field.options[j].selected)
                                    s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                            }
                        } else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
                            valueString += field.value + ',';

                            s[field.name] = valueString;


                        }
                    }
                }
            }
            return s
        }
    }

    window.quiz = new Quiz('.quiz', quizData, {
        nextBtnText: "Далее",
        sendBtnText: "Отправить"
    });
}
