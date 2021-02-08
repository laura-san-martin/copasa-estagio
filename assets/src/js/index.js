import $ from '../../node_modules/jquery';
global.$ = $;
global.jQuery = $;
jQuery = $;
import WOW from '../../node_modules/wow.js';

$("document").ready(function () {

    var wow = new WOW();

    wow.init();

    setElementsByScroll($(window).scrollTop());
 
    $(window).scroll(function(event){
        setElementsByScroll($(this).scrollTop());
    });
    

    $(".scroll-to").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $("#mapa-1, #mapa-2, #mapa-3, #mapa-4, #mapa-5, #mapa-6").hover(function () {
        $("#" + this.id + "-texto").fadeIn("slow");
    },
        function () {
        $("#" + this.id + "-texto").fadeOut();
    });

    $("#mapa-1-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNNT.pdf', '_blank');
    });
    $("#mapa-2-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNOE.pdf', '_blank');
    });
    $("#mapa-3-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNLE.pdf', '_blank');
    });
    $("#mapa-4-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNCE.pdf', '_blank');
    });
    $("#mapa-5-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNMT.pdf', '_blank');
    });
    $("#mapa-6-link").on('click', function (event) {
        window.open('http://www.copasa.com.br/estagios/PDFs/UNSL.pdf', '_blank');
    });
});



function setElementsByScroll(current){
            
    if (current >= $(window).height()*0.13+85){
        $('.navigation').addClass('navigation--fix-top');
    }
    else {
        $('.navigation').removeClass('navigation--fix-top');
    }


   if($(window).width() > 992)
    {
        if (current > 800){
            $('#social-menu').addClass('navigation__social--fix-top');
            $('#social-menu').find('.navigation__social__icon').addClass('animated bounceIn');
            $('#social-menu').attr('style','');
            $('#social-menu').removeClass('wow fadeInDown');
        }
        else {
            $('#social-menu').removeClass('navigation__social--fix-top');
            $('#social-menu').find('.navigation__social__icon').removeClass('animated bounceIn');
        }

        if (current > 1100){           
            $('#content-menu').addClass('navigation__content--fix-top');
            $('#content-menu').attr('style','');
            $('.navigation__content__icon').addClass('animated bounceIn'); 
            $('#content-menu').removeClass('wow fadeInUp');    
        }
        else {
            $('#content-menu').removeClass('navigation__content--fix-top');
            $('.navigation__content__icon').removeClass('animated bounceIn');
        }
    }else{
        $('#social-menu').removeClass('navigation__social--fix-top');
        $('#content-menu').removeClass('navigation__content--fix-top');
    } 
}

(function($) {
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
})(jQuery);