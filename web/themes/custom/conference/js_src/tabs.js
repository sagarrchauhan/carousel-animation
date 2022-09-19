(function ($) {
  // Register event listener to the click on the tab
  $(".quicktabs-tabs a").on("click", function () {
    $(".quicktabs-animate").removeClass("quicktabs-animate");
    let elId = $(this).parent().attr("aria-controls");
    $("#" + elId).addClass("quicktabs-animate");
    window.lastActiveCarTabId = elId;
  });

  // Get the id of the tab when window loads
  $(window).on("load", function () {
    window.lastActiveCarTabId = $(".quicktabs-tabs li.active").attr(
      "aria-controls"
    );
  });
})(window.jQuery);
