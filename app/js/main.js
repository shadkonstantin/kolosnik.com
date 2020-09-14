$(function(){

    $(window).scroll(function(){
        $('.header__top').toggleClass('sticky', $(this).scrollTop() > 0);
        $('.header__menu-link').toggleClass('font-dark', $(this).scrollTop() > 0);
        $('.header__info-link').toggleClass('font-dark', $(this).scrollTop() > 0);
    });

    // $(".arrow-down").on("click", function () {
    //     $(".faq__answer1").slideToggle();
    //     $(this).toggleClass('rotate180');
    // });

    var title = document.getElementsByClassName('arrow-down'),
        content = document.getElementsByClassName('faq__answer');

    for (var i=0; i < title.length; i++){
        title[i].addEventListener('click', function(){
            if(!(this.classList.contains('active'))){
                for(var i = 0; i<title.length; i++){
                    title[i].classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }

});
