export default function heroProcess() {
     const emoji = document.querySelector('.fourtImage'),
          bestDesign = document.querySelector('.best-design-award'),
          webDeveloper = document.querySelector('.web-developer');

     // Function para i-check kung nasa gitna ang elemento
     function checkIfCenter(div) {
          const viewportHeight = window.innerHeight;
          const divPosition = div.getBoundingClientRect();

          if (divPosition.top >= 0 && divPosition.bottom <= viewportHeight) {
               return true;
          } else {
               return false;
          }
     }

     // Function para i-update ang posisyon ng emoji
     function updateEmojiPosition() {
          let isCentered = checkIfCenter(emoji);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               emoji.style.right = '50%';
               emoji.style.left = '34%';
               emoji.style.top = '7%';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               emoji.style.right = '50%';
               emoji.style.left = '40%';
               emoji.style.top = '1%';
          }
     }


     // Function para i-update ang posisyon ng emoji
     function updateBestDesignPosition() {
          let isCentered = checkIfCenter(bestDesign);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               bestDesign.style.right = '30%';
               bestDesign.style.left = '45%';
               bestDesign.style.bottom = '-10%';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               bestDesign.style.right = '30%';
               bestDesign.style.left = '42%';
               bestDesign.style.bottom = '-10%';
          }
     }
     // Function para i-update ang posisyon ng emoji
     function updateWebDeveloperPosition() {
          let isCentered = checkIfCenter(webDeveloper);
          if (isCentered) {
               // Kung nasa gitna, gawing relative para magamit ang translateY
               webDeveloper.style.top = '0';
               webDeveloper.style.left = '90%';
          } else {
               // Kung hindi nasa gitna, ibalik sa absolute at transformX
               webDeveloper.style.top = '0';
               webDeveloper.style.left = '80%';
          }
     }

     // I-check ang center sa simula
     updateEmojiPosition();
     updateBestDesignPosition();
     updateWebDeveloperPosition();

     // Event listener para sa scroll
     window.addEventListener('scroll', () => {
          updateEmojiPosition();
          updateBestDesignPosition();
          updateWebDeveloperPosition();
     });




};