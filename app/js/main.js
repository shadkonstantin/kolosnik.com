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

        $('.goods__item-btn').magnificPopup({
            type: "inline"
        });

        $("#goods__item-btn1").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count1').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count1').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count1').textContent;
            if (document.querySelector('#checkbox1').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }

        });
        $("#goods__item-btn2").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count2').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count2').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count2').textContent;
            if (document.querySelector('#checkbox2').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }
        });
        $("#goods__item-btn3").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count3').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count3').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count3').textContent;
            if (document.querySelector('#checkbox3').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }
        });
        $("#goods__item-btn4").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count4').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count4').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count4').textContent;
            if (document.querySelector('#checkbox4').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }
        });
        $("#goods__item-btn5").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count5').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count5').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count5').textContent;
            if (document.querySelector('#checkbox5').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }
        });
        $("#goods__item-btn6").on("click", function () {
            document.querySelector('#goods__title-count').innerHTML = document.querySelector('.goods__item-title').textContent;
            document.querySelector('#polosa_text').innerHTML = document.querySelector('#polosa-count6').textContent;
            document.querySelector('#cell_text').innerHTML = document.querySelector('#cell-count6').textContent;
            document.querySelector('#prutok_text').innerHTML = document.querySelector('#prutok-count6').textContent;
            if (document.querySelector('#checkbox6').checked) {
                document.querySelector('#checkbox_text').innerHTML = "да"

            } else {
                document.querySelector('#checkbox_text').innerHTML = "нет"

            }
        });

    }

);