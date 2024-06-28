
const typing = (el, sentence) => {
    [...sentence].forEach((char, index) => {
       setTimeout(() => {
         document.querySelector(el).textContent += char;
       }, 100 * ++index);
     });
   };
   typing('.h', '𝙶𝚊𝚕𝚕𝚎𝚛𝚢');