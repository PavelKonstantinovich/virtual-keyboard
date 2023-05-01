const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'shift', 'control', 'alt', 'delete', 'space', 'control', '&larr;', '&darr;', '&rarr;', 'alt'];
const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'shift', 'control', 'alt', 'delete', 'space', 'control', '&larr;', '&darr;', '&rarr;', 'alt'];
const which = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 18, 46, 32, 17, 37, 40, 39, 18];
const rendering = () => `
  <div class="container">
  <h1>Виртуальная клавиатура</h1>
  <button class="btn">Shift+Ctrl</button>
  <label for="text">Поле для ввода текста:</label>
  <textarea id="text" name="text"></textarea>
  <div class="keyboard"></div>
  </div>
  `;

document.body.insertAdjacentHTML('beforeend', rendering());

function addKeyboard() {
  let keys = '';
  for (let i = 0; i < en.length; i++) {
    const item = en[i].length > 1 ? `<div id="${which[i]}" class="key big-key ${en[i]}">${en[i]}</div>` : `<div  id="${which[i]}" class="key">${en[i]}</div>`;
    keys += item;
  }
  document.querySelector('.keyboard').innerHTML = keys;
}

addKeyboard();
const key = document.querySelectorAll('.key');
const removeClass = () => key.forEach((el) => el.classList.remove('active'));
console.log(ru.length);

const arr = [];
document.addEventListener('keydown', (e) => {
  arr.push(e.which);
  console.log(e);
  removeClass();
  document.getElementById(`${e.which}`).classList.add('active');
});

key.forEach((el) => {
  el.addEventListener('click', (e) => {
    removeClass();
    e.target.classList.add('active');
  });
});
