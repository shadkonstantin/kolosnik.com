$(function () {


        $(window).scroll(function () {
                $(".header__top").toggleClass("header__top--scroll", $(this).scrollTop() > 0);
            }

        );


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
                }

            )
        }

        ;

        $(".header__menu-btn").on("click", function () {
                $(".header__menu ul").slideToggle();
            }

        );


        $(".header__info-icon").on("click", function () {
                $(".header__top .header__info").slideToggle();
            }

        );

        $(".option-list").on("click", function () {
                $(".goods__wrapper").removeClass('grid');
                $(this).addClass('active');
                $('.option-grid').removeClass('active');

            }

        );

        $(".option-grid").on("click", function () {
                $(".goods__wrapper").addClass('grid');
                $(this).addClass('active');
                $('.option-list').removeClass('active');
            }

        );

        $(".option-list").on("click", function () {
                $(".information__wrapper").addClass('list');
                $(this).addClass('active');
                $('.option-grid').removeClass('active');

            }

        );

        $(".option-grid").on("click", function () {
                $(".information__wrapper").removeClass('list');
                $(this).addClass('active');
                $('.option-list').removeClass('active');
            }

        );

        $('select[class="stupen__select"]').styler();
        $('select[id="product"]').styler();
        $('input[id="popup__checkbox"]').styler();




        $('.header__button-link').magnificPopup({
            type: "inline"
        });


    }

);