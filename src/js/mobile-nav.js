export default function mobileNav() {
     const menuBar = document.querySelector('.menu-bars'),
          navigations = document.querySelector('.mobile-navigations'),
          navHome = document.querySelector('.nav-home'),
          navService = document.querySelector('.nav-service'),
          navExperience = document.querySelector('.nav-experience'),
          navPortFollio = document.querySelector('.nav-portfollio'),
          navTestimonials = document.querySelector('.nav-testimonials');

     let isOpen = false;


     menuBar.addEventListener('click', () => {
          console.log(isOpen);
          if (isOpen == false) {
               navigations.style.opacity = '1';
               navigations.style.pointerEvents = 'auto'

               navHome.style.transform = 'translateX(-250%)';
               navService.style.transform = 'translateX(-250%)';
               navExperience.style.transform = 'translateX(-200%)';
               navPortFollio.style.transform = 'translateX(-200%)';
               navTestimonials.style.transform = 'translateX(-140%)';
          } else {
               navHome.style.transform = 'translateX(250%)';
               navService.style.transform = 'translateX(250%)';
               navExperience.style.transform = 'translateX(200%)';
               navPortFollio.style.transform = 'translateX(200%)';
               navTestimonials.style.transform = 'translateX(140%)';

               navigations.style.pointerEvents = 'none';

          };
          isOpen = !isOpen;
     });
     document.addEventListener('scroll', () => {
          navHome.style.transform = 'translateX(250%)';
          navService.style.transform = 'translateX(250%)';
          navExperience.style.transform = 'translateX(200%)';
          navPortFollio.style.transform = 'translateX(200%)';
          navTestimonials.style.transform = 'translateX(140%)';

          navigations.style.pointerEvents = 'none';
          isOpen = false;
     })
};