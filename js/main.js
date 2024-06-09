(function ($) {
    "use strict";
/*=================================
       Trending Posts Swiper
   ==================================*/
   $(document).ready(function () {
    var swiper = new Swiper(".trending-posts-swiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 3000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    var swiper2 = new Swiper(".trending-posts-swiper2", {
      spaceBetween: 10,
      speed: 3000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  });

})(jQuery);