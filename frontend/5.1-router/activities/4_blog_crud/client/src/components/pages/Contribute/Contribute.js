import React, { useState } from 'react';
import './Contribute.css';

function Contribute() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function onChangeContent(ev) {
    setContent(ev.target.value);
  }

  function onChangeTitle(ev) {
    setTitle(ev.target.value);
  }

  function submit() {
    // TODO: finish ..
    const formData = {
      title: 'test title',
      content: 'test content',
    };

    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(formData),
    };

    fetch('/api/create/', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('done!');
      });
  }

  return (
    <div className="Contribute">
      <h1>Contribute</h1>
      <h2>Title</h2>
      <input
        name="title"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />

      <h2>Content</h2>
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

export default Contribute;
