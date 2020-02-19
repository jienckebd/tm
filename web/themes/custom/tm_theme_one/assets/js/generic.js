/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.tm_theme_one_messages = {
    attach: function (context) {
      window.setTimeout(function() {
        $(".messages.status, .messages.alert-success").fadeTo(500, 0).slideUp(500, function () {
          $(this).remove();
        });
      }, 7000);
    }
  };

  $.fn.smoothScrollToTarget = function(target) {
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 500);
  };

  Drupal.behaviors.tm_theme_one_generic = {
    attach: function (context, settings) {

      $(".autofocus").once().focus();

      $('.entity-browser-form .grid').once().on('click', function (e) {
        $(this).find('input[type="checkbox"]').trigger('click');
        $(this).closest('form').find('input.form-submit').trigger('click');
      });
    }
  };

  Drupal.behaviors.tm_theme_one_generic_ajax = {
    attach: function (context, settings) {
      $('.ui-dialog .btn').once().on('click', function (e) {
        $(this).find('input[type="checkbox"]').trigger('click');
        $(this).closest('form').find('input.form-submit').trigger('click');
      });
    }
  };

  /**
   * Add necessary theming hooks.
   */
  $.extend(Drupal.theme, /** @lends Drupal.theme */ {

    /**
     * Renders an Ajax throbber.
     *
     * @return {string}
     *   The themed element.
     */
    ajaxThrobber: function () {
      return '<span class="ajax--progress"><i class="fa fa-refresh fa-spin"></i></span>';
    }

  });

})(jQuery, Drupal, drupalSettings);
