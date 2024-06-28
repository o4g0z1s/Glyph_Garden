
const typing = (el, sentence) => {
    [...sentence].forEach((char, index) => {
       setTimeout(() => {
         document.querySelector(el).textContent += char;
       }, 100 * ++index);
     });
   };
   
   typing('.typing-animation', `グリフガーデン（文字の庭）は、プレーンテキストを豊かにする様々な入力可能文字を収録したサイトです。`);
   typing('.h', '𝙶𝚕𝚢𝚙𝚑_𝙶𝚊𝚛𝚍𝚎𝚗');