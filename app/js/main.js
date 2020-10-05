$(function () {
  $(window).scroll(function () {
    $(".header__top").toggleClass(
      "header__top--scroll",
      $(this).scrollTop() > 0
    );
  });

  var item = document.getElementsByClassName("faq__item"),
    content = document.getElementsByClassName("faq__answer");

  for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        for (var i = 0; i < item.length; i++) {
          item[i].classList.remove("active");
        }

        this.classList.add("active");
      }
    });
  }

  const menulinks = document.querySelectorAll(".header__menu-link");
  for (let link of menulinks) {
    link.addEventListener("click", () => {
      for (let link of menulinks) {
        link.classList.remove('header__menu-link--active');
      }
      link.classList.add('header__menu-link--active');
    });
  };


  $(document).ready(function () {
    $('.header__menu-list .header__menu-item .header__menu-link').each(function () {
      var location = window.location.href;
      var link = this.href;
      if (location == link) {
        $(this).addClass('header__menu-link--active');
      }
    });
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });

  $(".header__info-icon").on("click", function () {
    $(".header__top .header__info").slideToggle();
  });

  $(".option-filter").on("click", function () {
    $(".page-aside").toggleClass('page-aside--toggle');
  });


  $(".option-list").on("click", function () {
    $(".goods__wrapper").removeClass("grid");
    $(this).addClass("active");
    $(".option-grid").removeClass("active");
  });

  $(".option-grid").on("click", function () {
    $(".goods__wrapper").addClass("grid");
    $(this).addClass("active");
    $(".option-list").removeClass("active");
  });

  $(".option-list").on("click", function () {
    $(".information__wrapper").addClass("list");
    $(this).addClass("active");
    $(".option-grid").removeClass("active");
  });

  $(".option-grid").on("click", function () {
    $(".information__wrapper").removeClass("list");
    $(this).addClass("active");
    $(".option-list").removeClass("active");
  });

  $('select[id="product"]').styler();
  $('input[class="popup__checkbox"]').styler();
  $("select").styler();

  $(".header__button-link").magnificPopup({
    type: "inline",
  });

  $(".goods__item-btn").magnificPopup({
    type: "inline",
  });

  $(".footer__item-button").magnificPopup({
    type: "inline",
  });

  const polosaText = document.getElementById("polosa_text");
  const cellText = document.getElementById("cell_text");
  const prutokText = document.getElementById("prutok_text");
  const checkbox = document.getElementById("checkbox_text");
  const title = document.getElementById("goods__title-count");
  const length_text = document.getElementById("length_text");
  const width_text = document.getElementById("width_text");

  const goodsTitle = document.getElementById("goods__title--input");
  const polosaTextInput = document.getElementById("polosa_text--input");
  const cellTextInput = document.getElementById("cell_text--input");
  const prutokTextInput = document.getElementById("prutok_text--input");
  const znTextInput = document.getElementById("zn_text--input");


  const lengthTextInput = document.getElementById("length_text--input");
  const widthTextInput = document.getElementById("width_text--input");


  const buttonsProduct = document.querySelectorAll(".goods__item-btn");

  for (let btn of buttonsProduct) {
    btn.addEventListener("click", () => {
      takeActiveProduct(btn);
    });
  }

  const takeActiveProduct = (currentActive) => {
    title.innerHTML = currentActive.parentElement.parentElement.querySelector(
      ".goods__item-title"
    ).textContent;
    goodsTitle.value = title.textContent;

    polosaText.innerHTML = currentActive.parentElement.parentElement.querySelector(
      ".polosa"
    ).textContent;

    cellText.innerHTML = currentActive.parentElement.parentElement.querySelector(
      ".cell"
    ).textContent;
    prutokText.innerHTML = currentActive.parentElement.parentElement.querySelector(
      ".prutok"
    ).textContent;

    if (
      currentActive.parentElement.parentElement.querySelector(
        ".checkbox__product"
      ).checked
    ) {
      checkbox.innerHTML = "да";
    } else {
      checkbox.innerHTML = "нет";
    }

    goodsTitle.value = title.textContent;
    polosaTextInput.value = polosaText.textContent;
    cellTextInput.value = cellText.textContent;
    prutokTextInput.value = prutokText.textContent;
    znTextInput.value = checkbox.textContent;



    const length = currentActive.parentElement.parentElement.querySelector(
      ".stupen__select-length"
    ).firstChild.value;
    const width = currentActive.parentElement.parentElement.querySelector(
      ".stupen__select-width"
    ).firstChild.value;

    length_text.innerHTML = length;
    width_text.innerHTML = width;

    lengthTextInput.value = length_text.textContent;
    widthTextInput.value = width_text.textContent;

  };
});


$(document).ready(function () {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
      iconList = $('.option-list');
    nastil = $(".goods__wrapper");
    stupen = $("#goods__wrapper--stupen");
    krepezh = $("#goods-wrapper--krepezh");


    // лучше сохранять объект в переменную, многократно чтобы не насиловать 
    // страницу для поиска нужного элемента
    if (windowWidth < 650) {
      nastil.removeClass('list');
      nastil.addClass('grid');
    }
    if (windowWidth < 850) {
      stupen.removeClass('list');
      stupen.addClass('grid');
      iconList.addClass('display-none');
    }
    if (windowWidth >= 850) {
      iconList.removeClass('display-none')
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function () {
    checkWidth(); // проверит при изменении размера окна клиента
  });
});

// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery-item').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true, // set to true to enable gallery

    preload: [0, 2], // read about this option in next Lazy-loading section

    navigateByImgClick: true,

    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  }
});


//1 пример
$(function () {
  $("#popup__phone").mask("8(999) 999-9999");
});


