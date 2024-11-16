import React from "react";

function emojiArray(minutes) {
  const duration = minutes < 30 ? 5 : 10;
  const anEmoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = " ";
  for (let i = 0; i < minutes; i += duration) {
    emojis = emojis.concat(anEmoji);
  }

  return emojis;
}

function Article({ 
    title, 
    date = "January 1, 1970", 
    preview, 
    minutes 
    }) {

  const emojis = emojiArray(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;