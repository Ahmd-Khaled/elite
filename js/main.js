$(function(){
    'use strict';

    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - upperH - navH);

    // Shuffle Featured Works
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'))
        if ($(this).data('class') === 'all'){
            $('.featured-work .shuffle-imgs .work').css('opacity', '1');
        } else{
            $('.featured-work .shuffle-imgs .work').css('opacity', '0.08');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });

    // Testimonials Slider adjust Arrows colors
    // (function autoSlider(){
    //     $('.testimonials .carousel .active').each(function(){
    //         if ($(this).is(':first-child')){
    //             $(this).css('background-color' , '#ec1c23');
    //             console.log("Yes")
    //             autoSlider();
    //         }
    //     });
    // });

});