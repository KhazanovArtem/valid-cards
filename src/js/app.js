import CardWidget from "./widget";
import CardValid from "./CardValid";

const container = document.querySelector('.container');
const form = new CardWidget(container);
form.bindToDOM();

const valid = new CardValid();
