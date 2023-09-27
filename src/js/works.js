export default function Works(){
     const mainCircle = document.querySelector(".wheel-container");

     let rotation = 0;

     function rotateWheel() {
          rotation += 1;
          mainCircle.style.transform = `rotate(${rotation}deg)`;
          requestAnimationFrame(rotateWheel);
     }

     rotateWheel();
};