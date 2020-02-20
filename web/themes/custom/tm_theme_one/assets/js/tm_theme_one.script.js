/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */

(function($) {
  $.fn.voteUpSuccess = function(widget_selector) {
    var widgets = $(widget_selector);

    widgets.addClass("vote-cast-success");

    setTimeout(function(){
      $(widget_selector).removeClass("vote-cast-success");
    }, 2500)

    widgets.trigger('voteUpSuccess');

  };
})(jQuery);

(function($) {
  $.fn.voteResetSuccess = function(widget_selector) {
    console.log(data);
  };
})(jQuery);

(function ($, Drupal, drupalSettings) {
  'use strict';

  $.fn.voteResetSuccess = function(widget_selector) {
    console.log(data);
  };

  // Hello World.
  Drupal.behaviors.tm_theme_one_contextual = {
    attach: function (context) {

      $('.contextual button').on('click', function (e) {
        // e.stopPropagation();
      });

    }
  };

  // Hello World.
  Drupal.behaviors.tm_theme_one_ajax = {
    attach: function (context) {

      $("iframe").each( function( index, element ){
        $(this).attr('src', $(this).attr('src'));
      });

      $( ".vud-widget" ).on( "voteUpSuccess", function( event ) {
      });

      $('.views-exposed-form input').once().on('change', function (e) {
        $('.view').addClass('ajax--processing');
        $('html, body').animate({
          scrollTop: $('#highlighted').offset().top - 170
        }, 500);
      });

      $('.pager--views-infinite-scroll a.button').once().on('click', function (e) {
        $(this).closest('.ajax--wrapper').addClass('ajax--processing');
      });

      $('.use-ajax').on('click', function (e) {
        $(this).closest('.ajax--wrapper').addClass('ajax--processing');
      });

      $(document).ajaxStop(function(){
        $('.ajax--processing').removeClass('ajax--processing');
      });

      $('a.use-ajax[data-dialog-type="modal"]').once().on('click', function (e) {
        $('body').addClass('ajax--processing');
      });

    }
  };

  // Hello World.
  Drupal.behaviors.tm_theme_one_header = {
    attach: function (context) {

      // Add active class to footer when scrolled past 200px.
      $(window).scroll(function () {
        var top = $(this).scrollTop();
        var header = $('#header');
        if (top > 100) {
          if (!header.hasClass('active')) {
            header.addClass('active');
          }
        }
        else {
          if (header.hasClass('active')) {
            header.removeClass('active');
          }
        }

        if (top <= 0) {
          $('#animated-banner img').attr('src', '/themes/custom/tm_theme/images/logo_animated.gif');
        }
      });

      $('#header-mobile-toggle').on('click', function (e) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $('header#header').removeClass('responsive');
        }
        else {
          $(this).addClass('active');
          $('header#header').addClass('responsive');
        }
      });

      $('#header-search-toggle').hover(function () {
        $(this).addClass('active');
        $('#header-search-modal').addClass('active');
        $('#header-search-modal-inner input.form-search').focus();
      });

      $(document).on('click', function (e) {
        if ($(e.target).closest('#header-search-modal').length) {
          return;
        }
        $('#header-search-modal, #header-search-toggle').removeClass('active');
      });

    }
  }

})(jQuery, Drupal, drupalSettings);
