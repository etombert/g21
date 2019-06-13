$(document).ready(function() {
    $('.scrollTo').click( function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000; // Durée de l'animation (en ms) (750 à la base)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });

    /* FADE // Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top -450 + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                // $(this).animate({'opacity':'1'},500);
                $(this).addClass('showme');

            }

        });

    });

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        speed: 500,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        allowTouchMove: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});