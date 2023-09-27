export default function ServiceFunction() {
     const developerDiv = document.querySelector('.developer-container'),
          webDiv = document.querySelector('.web-development'),
          designDiv = document.querySelector('.desigh-container'),
          uiUxDiv = document.querySelector('.ui-ux-container');

     // Function para i-check kung nasa gitna ang elemento
     function checkIfCenter(div) {
          const viewportHeight = window.innerHeight;
          const divPosition = div.getBoundingClientRect();

          if (divPosition.top >= 0 && divPosition.bottom <= viewportHeight) {
               return true;
          } else {
               return false;
          }
     };
     // Function para i-update ang posisyon ng developerDiv
     function updateDeveloperPosition() {
          let isCentered = checkIfCenter(developerDiv);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               developerDiv.style.transform = 'transLateX(-10%)';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               developerDiv.style.transform = 'transLateX(10%)';
          }
     };

     function updateWebPosition() {
          let isCentered = checkIfCenter(webDiv);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               webDiv.style.transform = 'transLateX(-10%)';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               webDiv.style.transform = 'transLateX(10%)';
          }
     };

     function updateDesignPosition() {
          let isCentered = checkIfCenter(designDiv);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               designDiv.style.transform = 'transLateX(-10%)';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               designDiv.style.transform = 'transLateX(10%)';
          }
     };

     function updateUiUxPosition() {
          let isCentered = checkIfCenter(uiUxDiv);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               uiUxDiv.style.transform = 'transLateX(-10%)';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               uiUxDiv.style.transform = 'transLateX(10%)';
          }
     };

     updateDeveloperPosition();
     updateWebPosition();
     updateDesignPosition();
     updateUiUxPosition();

     window.addEventListener('scroll', () => {
          updateDeveloperPosition();
          updateWebPosition();
          updateDesignPosition();
          updateUiUxPosition();
     });

};