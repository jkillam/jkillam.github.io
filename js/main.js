
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-gallery').owlCarousel({
        items:6,
        loop:true,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>",
        "<span class='lnr lnr-arrow-down'></span>"],        
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 6,
            }

        }
    });



    var is_running = false;

    // Select all links with hashes
    $('.navbar-nav a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click',function(event) {

    console.log(is_running)

    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        // If we are close enough then don't do anything
        if (Math.abs($(window).scrollTop() - target.offset().top) > 10) {

          if (is_running) {
            console.log('breaking')
            return;
          }
          is_running = true;

          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              console.log('setting false')
              is_running = false;
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
            console.log('setting false')
            is_running = false;
          });
        }
      }
    }
    });

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      });   

 });
