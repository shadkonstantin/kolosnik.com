$(function () {

    $(window).scroll(function () {
        $(".header__top").toggleClass("header__top--scroll", $(this).scrollTop() > 0);
    });


    var item = document.getElementsByClassName('faq__item'),
        content = document.getElementsByClassName('faq__answer');

    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function () {
            if (!(this.classList.contains('active'))) {
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }

    $(".header__menu-btn").on("click", function() {
        $(".header__menu ul").slideToggle();
      });

});