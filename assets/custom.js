var swiper = new Swiper(".announcement-bar", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".next-arrow",  
      prevEl: ".prev-arrow",  
    },
  });

  var swiper = new Swiper(".iconSlider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 28,
      loop: true,
    },
    414: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    },
  }
  });
  
    
      function HideAnnouncementBar() {
        document.querySelector('.ctm-announcement-bar').style.display = 'none';
      }

