import rendering from './js/container.js';
import { en, ru, which } from './js/array.js';

document.body.insertAdjacentHTML('beforeend', rendering());

function keyboard() {
  let keyboard = '';
  for (let i = 0; i < en.length; i++) {
    const item = en[i].length > 1 ? `<div id="${which[i]}" class="key big-key ${en[i]}">${en[i]}</div>` : `<div  id="${which[i]}" class="key">${en[i]}</div>`;
    keyboard += item;
  }
  document.querySelector('.keyboard').innerHTML = keyboard;
}

keyboard();

console.log(ru.length);

const arr = [];
document.addEventListener('keydown', (e) => {
  arr.push(e.which);
  console.log(e);
  document.querySelectorAll('.key').forEach((element) => element.classList.remove('active'));
  document.getElementById(`${e.which}`).classList.add('active');
});
