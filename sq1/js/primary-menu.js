var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

(function ($, Drupal) {
  Drupal.behaviors.sq1ThemeLoadPrimaryMenu = {
    attach: function (context, settings) {

      function toggleMenu(element) {

        if ($(element).attr('data-open') == 'true') {
          $(element).attr('data-open', 'false');
        }
        else {
          $(element).attr('data-open', 'true');
        }

      }

      $('.region-primary-menu .menu').click(function(){

        toggleMenu($(this));
        
      });

    }
  };
})(jQuery, Drupal);