var swiper = new Swiper(".announcement-bar", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".next-arrow",  
      prevEl: ".prev-arrow",  
    },
  });
  var swiper = new Swiper(".video-banner-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next-arrow",  
      prevEl: ".prev-arrow",  
    },
  });
  
    
      function HideAnnouncementBar() {
        document.querySelector('.ctm-announcement-bar').style.display = 'none';
      }

