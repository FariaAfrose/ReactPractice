import React from 'react';

export default function Text({ addEmoji, addBraket }) {
let text = 'I love Js programing Language';
if (addEmoji) {
    text = addEmoji(text, '❤️');
}
if (addBraket) {
    text = addBraket(text);
}
return (
  <div>
    { text}
  </div>
);
}
