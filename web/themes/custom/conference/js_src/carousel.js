(function ($, Drupal) {
  // Get custom slider navigation buttons which is styled differently
  function customSliderButtons() {
    return $(`<button class="conf-carousel__nav-button" type="button" />`);
  }

  // Set each of the carousel for the tabs
  function setCarousel(elementSel) {
    $(elementSel).slick({
      customPaging: customSliderButtons,
      slidesToScroll: 1,
      slidesToShow: 1,
      dots: true,
      arrows: true,
      infinite: true,
      mobileFirst: true,
      variableWidth: true,
      appendDots: $(elementSel).parent().find(".conf-carousel__nav"),
      nextArrow: $(elementSel).parent().find(".conf-carousel__arrow-right"),
      prevArrow: $(elementSel).parent().find(".conf-carousel__arrow-left"),
      responsive: [
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          },
        },
      ],
    });
  }

  // Initialize each of the carousel by the class name
  function initCarousel() {
    $(".conf-carousel__wrapper").each(function (i, el) {
      setCarousel(el);
    });
  }

  // Call the initializing function
  initCarousel();
})(window.jQuery, window.Drupal);
