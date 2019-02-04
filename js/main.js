
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

	var page = $('html, body')


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});


  var is_scrolling = false;
  var user_scroll_sources = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove";

  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      console.log(target)
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();

        // If we are close enough then don't do anything
        if (Math.abs($(window).scrollTop() - target.offset().top) > 10) {

          if (is_scrolling) {
          // do nothing if a scroll animation is already in progress
            return;
          }
          is_scrolling = true;

          // Set listener for user scroll that will stop animation
          page.on(user_scroll_sources, function(){
            page.stop();
            is_scrolling = false;
          });

        console.log(this);
          page.animate({
            scrollTop: target.offset().top - header_height
          }, 1000, function() {
            // Callback after animation - Stop listening for user input
            page.off(user_scroll_sources);
            is_scrolling = false;
          });
        }
      }
    }
   });
 });
