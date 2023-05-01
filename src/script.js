import rendering from './js/container.js';
import { en, ru } from './js/array.js';

document.body.insertAdjacentHTML('beforeend', rendering());

function keyboard() {
  let keyboard = '';
  for (let i = 0; i < en.length; i++) {
    const item = en[i].length > 1 ? `<div class="key big-key ${en[i]}">${en[i]}</div>` : `<div class="key">${en[i]}</div>`;
    keyboard += item;
  }
  document.querySelector('.keyboard').innerHTML = keyboard;
}

keyboard();
