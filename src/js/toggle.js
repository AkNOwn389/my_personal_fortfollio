export default function toggle() {
     const root = document.documentElement;
     let isNight = window.localStorage.getItem('isNight');
     const switchInput = document.querySelector('.toggle-switch');
     function toggleDarkMode() {
          if (switchInput.checked == true) {
               // Day mode
               root.style.setProperty('--dark', 'black');
               root.style.setProperty('--light', 'white');
               root.style.setProperty('--blackToYellow', 'black');
               root.style.setProperty('--purple', 'rgb(238 210 255)');
               root.style.setProperty('--blueCard', '#DDF8FE');
               root.style.setProperty('--black', 'white');


               window.localStorage.setItem('isNight', 'false');
          } else {
               // dark mode
               root.style.setProperty('--dark', 'white'); // Change colors accordingly
               root.style.setProperty('--light', 'black');
               root.style.setProperty('--blackToYellow', '#F5C32C');
               root.style.setProperty('--purple', 'black');
               root.style.setProperty('--blueCard', 'black');
               root.style.setProperty('--black', '#242D49');

               window.localStorage.setItem('isNight', 'true');
          };
     };

     switchInput.addEventListener('change', toggleDarkMode);

     if (isNight == 'true') {
          root.style.setProperty('--dark', 'white');
          root.style.setProperty('--light', 'black');
          root.style.setProperty('--blackToYellow', '#F5C32C');
          root.style.setProperty('--purple', 'black');
          root.style.setProperty('--blueCard', 'black');
          switchInput.checked = false;
     } else {
          switchInput.checked = true;
          root.style.setProperty('--black', 'white');
     }
};