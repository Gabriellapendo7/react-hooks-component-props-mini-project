import React from 'react'
import blogData from '../data/blog';

function Article({ title, date = "January 1, 1970", preview }) {
    return (
      <article>
        <h3 title={title}>{title}</h3>
        <small date={date}>{date}</small>
        <p preview={preview}>{preview}</p>
      </article>
    );
  }

export default Article