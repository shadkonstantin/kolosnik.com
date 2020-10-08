const generatePopupCallback = () => {
  const popup = `  <div class="popup__callback mfp-hide">
    <div class="popup__title">
      заказать звонок
    </div>
    <div class="popup__inner">
      <form action="mail_callback.php" class="popup__form ajax-contact-form" method="POST">
        <input type="text" placeholder="Ваше имя" name="name" class="popup__inner-input" >
        <input type="text" placeholder="Ваш телефон" name="phone" class="popup__inner-input" id="popup__phone">
        <div class="popup__politika">
          <input type="checkbox" name="" class="popup__checkbox" checked>
          <p>отправляя данное сообщение, я соглашаюсь на обработку моих персональных данных</p>
        </div>
        <button class="popup__btn" type="submit">заказать</button>
      </form>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', popup);
}

const generatePopupMain = () => {
  const popup = `
    <div class="popup__wrapper mfp-hide">
    <div class="popup__title">
      заказать продукт
    </div>
    <div class="popup__inner">
      <form action="mail.php" class="popup__form" method="POST">
        <input type="text" placeholder="Ваше имя" name="name" class="popup__inner-input" required>
        <input type="text" placeholder="Ваш телефон" name="phone" class="popup__inner-input" id="popup__phone" required>
        <input type="email" placeholder="ваш e-mail" name='email' class="popup__inner-input" required>
        <select id="product" aria-placeholder="Продукт" name="product">
          <option value="" selected disabled>Выберите продукт</option>
          <option value="Сварной решетчатый настил 30*3">Сварной решетчатый настил 30*3</option>
          <option value="Сварной решетчатый настил 30*2">Сварной решетчатый настил 30*2</option>
          <option value="Сварной решетчатый настил 40*3">Сварной решетчатый настил 40*3</option>
          <option value="Сварной решетчатый настил 40*4">Сварной решетчатый настил 40*4</option>
          <option value="Ступени из сварного настила">Ступени из сварного настила</option>
        </select>
        <textarea class="popup__message" name="message" placeholder="Сообщение"></textarea>
        <div class="popup__politika">
          <input type="checkbox" name="" class="popup__checkbox" checked>
          <p>отправляя данное сообщение, я соглашаюсь на обработку моих персональных данных</p>
        </div>
        <button class="popup__btn" type="submit">заказать</button>
      </form>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popup);
}

const generatePopupFooter = () => {
  const popup = `<div class="popup__footer mfp-hide">
  <div class="popup__title">

  </div>
  <div class="popup__inner-footer">
    <div class="popup__text">
      
    </div>
  </div>
</div>`;
  document.body.insertAdjacentHTML('beforeend', popup);
}


generatePopupMain();
generatePopupCallback();
generatePopupFooter();