$(function(){

    $(window).scroll(function(){
        $('.header__top').toggleClass('sticky', $(this).scrollTop() > 0);
        $('.header__menu-link').toggleClass('font-dark', $(this).scrollTop() > 0);
        $('.header__info-link').toggleClass('font-dark', $(this).scrollTop() > 0);
    });

    $(".arrow-down").on("click", function () {
        $(".faq__answer").slideToggle();
        $(this).toggleClass('rotate180');
    });
   
});
