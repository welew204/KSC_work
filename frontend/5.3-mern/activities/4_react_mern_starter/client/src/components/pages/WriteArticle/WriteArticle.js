import React, { useState } from 'react';
import './WriteArticle.css';

function WriteArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function onChangeContent(ev) {
    setContent(ev.target.value);
  }

  function onChangeTitle(ev) {
    setTitle(ev.target.value);
  }

  function submit() {
    console.log('TODO: Use POST to add new article');
  }


  return (
    <div className="WriteArticle">
      <h1>Write an article</h1>
      <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
      <br />

      <textarea
          name="content"
          placeholder="Contents"
          value={content}
          onChange={onChangeContent}
        />

      <br />

      <button onClick={submit}>Add to blog</button>
    </div>

  );
}

export default WriteArticle;
