const generateHeaderPage = () => {
  const headerPage = `
    <header class="header-page">
    <div class="header__top">
        <div class="header__logo">
            <a class="header__logo-link" href="#"><img class="header__logo-img" src="../img/logo.webp"
                    alt=""></a>
        </div>
        <nav class="header__menu">
            <div class="header__menu-btn">
                <div class="menu-btn__row"></div>
                <div class="menu-btn__row"></div>
                <div class="menu-btn__row"></div>
            </div>
            <ul class="header__menu-list">
                <li class="header__menu-item"><a href="./index.html" class="header__menu-link">Главная</a>
                </li>
                <li class="header__menu-item"><a href="./proizvodstvo.html"
                        class="header__menu-link">Производство</a>
                </li>
                <li class="header__menu-item"><a href="#" class="header__menu-link">Фотогалерея</a></li>
                <li class="header__menu-item"><a href="./product.html"
                        class="header__menu-link">Продукция</a></li>
                <li class="header__menu-item"><a href="./info.html"
                        class="header__menu-link">Проектировщикам</a>
                </li>
                <li class="header__menu-item"><a href="#" class="header__menu-link">О компании</a></li>
                <li class="header__menu-item"><a href="./contacts.html" class="header__menu-link">Контакты</a></li>
                <li class="header__menu-item"><a href="#" class="header__menu-link">Вакансии</a></li>
            </ul>
        </nav>
        <div class="header__info-icon">
            <div class="icon-envelope"></div>
        </div>
        <div class="header__info">

            <div class="header__info-item"><a class="header__info-link" href="#">kolosnik@kolosnik.com</a>
            </div>
            <div class="header__info-item"><a class="header__info-link" href="#">+7 (343) 321 20
                    49</a>
            </div>
            <div class="header__info-item"><a class="header__info-link" href="#">г.Екатеринбург,
                    ул.Монтажников,4</a></div>
            <div class="header__info-item"><a class="header__info-link" href="#">ПН - ПТ с 8:00 до
                    16:30</a></div>

        </div>
    </div>
</header>
`;
  document.body.insertAdjacentHTML('afterbegin', headerPage);
}
const generateFooterPage = () => {
  const footerPage = `
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__top">
          <div class="footer__item">
            <div class="footer__item-title">
              Частые вопросы?
            </div>
            <ul class="footer__list">
              <li class="footer__list-item"><a href="./contacts.html" class="footer__list-link">Где вы находитесь?</a>
              </li>
              <li class="footer__list-item"><a href="#" class="footer__list-link" id="footer__list-link--polosa">Что
                  такое несущая полоса?</a></li>
              <li class="footer__list-item"><a href="#" class="footer__list-link" id="footer__list-link--request">Как
                  составить заявку?</a></li>
              <li class="footer__list-item"><a href="#" class="footer__list-link" id="footer__list-link--period">Какой
                  срок изготовления?</a></li>
            </ul>
          </div>
          <div class="footer__item">
            <div class="footer__item-title">
              Навигация
            </div>
            <ul class="footer__list">
              <li class="footer__list-item"><a href="#" class="footer__list-link">Главная</a></li>
              <li class="footer__list-item"><a href="./proizvodstvo.html" class="footer__list-link">Как мы производим
                  настил?</a></li>
              <li class="footer__list-item"><a href="./gallery.html" class="footer__list-link">Фотографии выполненных
                  работ?</a></li>
              <li class="footer__list-item"><a href="./info.html" class="footer__list-link">Уставные документы?</a></li>
              <li class="footer__list-item"><a href="./aboutUs.html" class="footer__list-link">О нашей компании</a></li>
              <li class="footer__list-item"><a href="./contacts.html" class="footer__list-link">Как с нами
                  связаться?</a></li>
              <li class="footer__list-item"><a href="#" class="footer__list-link">Работа в нашей компании</a></li>
            </ul>
          </div>

          <div class="footer__item">
            <div class="footer__item-btn">
              <div class="footer__item-tel">
                <a href="#">+7 (343) 321-20-49</a>
                <a class="footer__item-button" href=".popup__callback">заказать звонок</a>
              </div>
            </div>
            <div class="footer__contacts">
              <a href="#">kolosnik@kolosnik.com</a>
              <p>г.Екатеринбург, ул.Монтажников,4</p>
              <p>График работы: ПН-ПТ с 8:00 до 16:30</p>
            </div>
            <div class="footer__item-title">
              Мы в социальных сетях
            </div>
            <div class="footer__social">
              <div class="footer__social-icon icon-facebook-f">

              </div>
              <div class="footer__social-icon icon-instagram"></div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom-logo">
            <img src="./img/footer-logo.webp" alt="">
          </div>
          <div class="footer__bottom-text">
            г.Екатеринбург, ул.Монтажников,4 <br>
            ОАО «КОЛОСНИК» - 2019. ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </div>

        </div>
      </div>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerPage);
}

generateHeaderPage();
generateFooterPage();