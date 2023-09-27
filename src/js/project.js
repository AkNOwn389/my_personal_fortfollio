export default function projects(){
     const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
     var swiper = new Swiper(".project-swiper", {
          spaceBetween: 20,
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
                    spaceBetween: 0,
               },
               600: {
                    slidesPerView: 2,
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
          on: {
               autoplayTimeLeft(s, time, progress) {
                 progressCircle.style.setProperty("--progress", 1 - progress);
                 progressContent.textContent = `${Math.ceil(time / 1000)}s`;
               }
             }
     });
};