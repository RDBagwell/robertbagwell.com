
var debouncedLayout = function () { };

var shuffleme = (function ($) {
  'use strict';
  var $grid = $('#grid'), //locate what we want to sort 
    $filterOptions = $('.portfolio-sorting div'),  //locate the filter categories
    $sizer = $grid.find('.shuffle_sizer'),    //sizer stores the size of the items

    init = function () {

      // None of these need to be executed synchronously
      setTimeout(function () {
        listen();
        setupFilters();
        setupSM();
      }, 100);

      // instantiate the plugin
      $grid.shuffle({
        itemSelector: '[class*="col-"]',
        sizer: $sizer
      });
    },

    // Set up button clicks
    setupFilters = function () {
      var $btnsParent = $filterOptions;
      $btnsParent.on('click', function () {
        var $this = $(this),
          isActive = $this.hasClass('gActive'),
          group = isActive ? 'small' : $this.data('group');

        $this.toggleClass('gActive');
        $this.children().toggleClass('gActive');
        debouncedLayout();
        // Filter elements
        $grid.shuffle('shuffle', group);
      });
      $btnsParent = null;
    },

    // starts in small filter
    setupSM = function () {
      $grid.shuffle('shuffle', 'large');
      debouncedLayout();
    },

    // Re layout shuffle when images load. This is only needed
    // below 768 pixels because the .picture-item height is auto and therefore
    // the height of the picture-item is dependent on the image
    // I recommend using imagesloaded to determine when an image is loaded
    // but that doesn't support IE7
    listen = function () {
      debouncedLayout = $.throttle(300, function () {
        $grid.shuffle('update');
      });

      // Get all images inside shuffle
      $grid.find('img').each(function () {
        var proxyImage;

        // Image already loaded
        if (this.complete && this.naturalWidth !== undefined) {
          return;
        }

        // If none of the checks above matched, simulate loading on detached element.
        proxyImage = new Image();
        $(proxyImage).on('load', function () {
          $(this).off('load');
          debouncedLayout();
        });

        proxyImage.src = this.src;
      });

      // Because this method doesn't seem to be perfect.
      setTimeout(function () {
        debouncedLayout();
      }, 500);
    };

  return {
    init: init
  };
}(jQuery));

$(document).ready(function () {
  shuffleme.init(); //filter portfolio
});