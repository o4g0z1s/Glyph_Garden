
const typing = (el, sentence) => {
    [...sentence].forEach((char, index) => {
       setTimeout(() => {
         document.querySelector(el).textContent += char;
       }, 100 * ++index);
     });
   };
   
   typing('.typing-animation', `グリフガーデン（文字の庭）は、プレーンテキストを豊かにする様々な入力可能文字を収録したウェブサイトです。`);
   typing('.h', '𝙲𝚘𝚕𝚞𝚖𝚗');