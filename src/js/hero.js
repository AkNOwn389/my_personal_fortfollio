export default function heroProcess() {
     const emoji = document.querySelector('.fourtImage');
     let isCentered = false; // Flag para malaman kung nasa gitna na

     // Function para i-check kung nasa gitna ang elemento
     function checkCenter() {
          const viewportHeight = window.innerHeight;
          const emojiRect = emoji.getBoundingClientRect();

          if (emojiRect.top >= 0 && emojiRect.bottom <= viewportHeight) {
               isCentered = true;
          } else {
               isCentered = false;
          }
     }

     // Function para i-update ang posisyon ng emoji
     function updatePosition() {
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

     // I-check ang center sa simula
     checkCenter();
     updatePosition();

     // Event listener para sa scroll
     window.addEventListener('scroll', () => {
          checkCenter();
          updatePosition();
     });

};