export default function clients(){
     var swiper = new Swiper(".clients", {

          centeredSlides: true,
          fade: true,
          grabCursor: true,
          autoplay: {
               delay: 9500,
               disableOnInteraction: false,
          },
          pagination: {
               el: ".swiper-pagination",
               clickable: true,
               // dynamicBullets: true,
          },
          breakpoints: {
               0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
               },
               600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
               },
               900: {
                    slidesPerView: 3,
                    
               },
               1230: {
                    slidesPerView: 3,
               },
               1540: {
                    slidesPerView: 4,
               },
               1850: {
                    slidesPerView: 5,
               },
          },
     });
};