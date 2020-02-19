(function ($, Drupal, drupalSettings) {

  $(document).on( "formSubmitPass", function(e, formId, formDomId, newWrapper) {
    console.log(e);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmitPass',
      'formId': formId,
      'formDomId': formDomId,
      'newWrapper': newWrapper
    });
    return false;
  });

  Drupal.behaviors.tm_theme_alpha_gtm_event_handler = {
    attach: function (context) {
    }
  };

})(jQuery, Drupal, drupalSettings);
