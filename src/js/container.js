const rendering = () => `
  <div class="container">
  <h1>Виртуальная клавиатура</h1>
  <button class="btn">Shift+Ctrl</button>
  <label for="text">Поле для ввода текста:</label>
  <textarea id="text" name="text"></textarea>
  <div class="keyboard"></div>
  </div>
  `;

export default rendering;
