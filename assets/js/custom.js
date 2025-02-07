(function ($) {
    "use strict";
    
    $('.owl-men-item').owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        margin: 30,
        autoplay: true,             
        autoplayTimeout: 2500,
		autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        }
    });
    $('.banner-hd').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,             
        autoplayTimeout: 2500,
		autoplaySpeed: 1000,
        autoplayHoverPause: true, // Tạm dừng khi di chuột vào slide
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('#top').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    // Window Resize Mobile Menu Fix
    mobileNav();

    // Scroll animation init
    window.sr = new scrollReveal();

    // Menu Dropdown Toggle
    if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() {    
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // Menu elevator animation
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var width = $(window).width();
                if(width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);    
                }                
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 80
                }, 700);
                return false;
            }
        }
    });

    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('.scroll-to-section a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('.scroll-to-section a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
            menu = target;
            var target = $(this.hash);
            $('html, body').stop().animate({
                scrollTop: (target.offset().top) - 79
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

    // Page loading animation
    $(window).on('load', function() {
        if($('.cover').length){
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    // Window Resize Mobile Menu Fix
    $(window).on('resize', function() {
        mobileNav();
    });

    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if(width < 767) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }

})(window.jQuery);
