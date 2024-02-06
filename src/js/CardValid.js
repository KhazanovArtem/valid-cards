import identifyCardName from './utils'
import { checkValid } from './utils';

export default class CardValid {
    constructor() {
        this.onBtnClick = this.onBtnClick.bind(this);
        this.chooseCard = this.chooseCard.bind(this);
        this.button = document.querySelector('.submit');
        this.text = document.querySelector('.card-input');
        this.button.addEventListener('click', this.onBtnClick);
        this.text.addEventListener('input', this.chooseCard);

    }

    onBtnClick(e) {
        e.preventDefault();
        if (this.text.value === '') {
            throw new Error('Поле для ввода карты пустое')
        }
        const isValid = checkValid(this.text.value);
        this.bindValidDOM(isValid);
    }

    chooseCard(e) {
        e.preventDefault();
        const cardName = identifyCardName(this.text.value);
        this.doValid(cardName);

    }

    doValid(text) {
        const array = document.querySelectorAll('img');
        for(let i = 0; i < array.length; i++) {
            array[i].classList.add('not-valid');
            if (array[i].dataset.id === text) {
                array[i].classList.remove('not-valid');
            }
            if (text === false) {
                array[i].classList.remove('not-valid');
            }
        }
    }

    bindValidDOM(response) {
        const checkValid = document.querySelector('.check-valid');
        checkValid.textContent = '';
        if (response) {
            checkValid.textContent = 'Карта валидна';
        } else {
            checkValid.textContent = 'Карта не валидна';
        }
    }
}