import cardsHTML from '../cards.html'

export default class CardWidget {
    constructor (parentEl) {
        this.parentEl = parentEl;
        this.cards = cardsHTML;
    };

    bindToDOM() {
        const cards = document.createElement('ul');
        cards.classList.add('cards');
        cards.innerHTML = this.cards;
        const form = document.createElement('form');
        form.classList.add('card-form');
        const input = document.createElement('input');
        input.classList.add('card-input');
        const button = document.createElement('button');
        button.classList.add('submit');
        button.textContent = 'Click to Validate'
        const answerValid = document.createElement('div');
        answerValid.classList.add('check-valid');
        form.appendChild(input);
        form.appendChild(button);
        this.parentEl.appendChild(cards);
        this.parentEl.appendChild(form);
        this.parentEl.appendChild(answerValid);
    }
}