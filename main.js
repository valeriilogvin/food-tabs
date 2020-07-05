(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
$('.food-of-the-day').slick({
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  draggable: false,
  dotsClass: 'my-slick-dots',
  prevArrow: '<button type="button" class="my-slick-prev"><svg class="icon icon-arrow-l"><use xlink:href="#icon-arrow-l"></use></svg></button>',
  nextArrow: '<button type="button" class="my-slick-next"><svg class="icon icon-arrow-r"><use xlink:href="#icon-arrow-r"></use></svg></button>',
  dots: true,
  slidesToScroll: 1,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 2

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }
  ]
});
