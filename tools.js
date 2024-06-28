
const typing = (el, sentence) => {
    [...sentence].forEach((char, index) => {
       setTimeout(() => {
         document.querySelector(el).textContent += char;
       }, 100 * ++index);
     });
   };
   typing('.h', '𝚃𝚘𝚘𝚕𝚜');