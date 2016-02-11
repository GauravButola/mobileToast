'use strict';

var mobileToast = {};
var element;
$( document ).on('ready', function() {
  // Add the toast element to the body
  $('body').append('<div class="mobileToast"></div>');
  element = $('.mobileToast');
});

mobileToast.show = function(data) {
  /*
   * data = {
   *   hideOnClick: false,
   *   message: '',
   *   duration: null,
   *   onClick: null,
   * }
   */
  if(data.hideOnClick) {
    // Add event listener to hide on click if `hideOnClick` is true.
    element.on('click', function() {
      mobileToast.hide();
    });
  }

  if(data.onClick) {
    element.on('click', function() {
      data.onClick();
    });
  }

  // Show the toast with message.
  element
    .text(data.message)
    .fadeIn();

  // If duration is provided then hide the toast after duration is elapsed.
  if(data.duration) {
    setTimeout(function() {
      mobileToast.hide();
    }, data.duration);
  }
};

mobileToast.hide = function() {
  // Turn off on click handlers.
  element.off('click');
  // Hide the toast.
  element.fadeOut(2000);
};

