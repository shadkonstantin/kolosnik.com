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

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });

  $(".header__info-icon").on("click", function () {
    $(".header__top .header__info").slideToggle();
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
  $('input[id="popup__checkbox"]').styler();
  $("select").styler();

  $(".header__button-link").magnificPopup({
    type: "inline",
  });

  $(".goods__item-btn").magnificPopup({
    type: "inline",
  });

  const polosaText = document.getElementById("polosa_text");
  const cellText = document.getElementById("cell_text");
  const prutokText = document.getElementById("prutok_text");
  const checkbox = document.getElementById("checkbox_text");
  const title = document.getElementById("goods__title-count");
  const length_text = document.getElementById("length_text");
  const width_text = document.getElementById("width_text");

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
    const length = currentActive.parentElement.parentElement.querySelector(
      ".stupen__select-length"
    ).firstChild.value;
    const width = currentActive.parentElement.parentElement.querySelector(
      ".stupen__select-width"
    ).firstChild.value;

    length_text.innerHTML = length;
    width_text.innerHTML = width;
  };
});



//ЗАЯВКИ НА ПОЧТУ