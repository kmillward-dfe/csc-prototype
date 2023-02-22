/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$('.app-navigation').insertAfter('.govuk-header ');

$(window).resize(function() {
  // This will fire each time the window is resized:
  if($(window).width() <= 753) {
    //move search to the end of the mobile menu
    //$(".govuk-header__navigation-list").insertAfter($(".govuk-header "));
    $("#app-navigation").appendTo($(".govuk-header__navigation-list"));
  } else {
    // move to end of website top wrapper div
    $("#app-navigation").insertAfter($(".govuk-header "));
  }
}).resize(); 

$(".app-section").insertAfter(".app-navigation");

$(document).ready(function() {
  if(window.location.pathname.match('amber')){
      $("body").addClass("amber");
  }
  $(".amber .govuk-header__content .govuk-header__link").html("Amber's Content");
});