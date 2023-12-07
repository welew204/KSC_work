import React, { useState } from 'react';
import './Contribute.css';

function Contribute() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function onChangeContent(ev) {
    setContent(
      content = ev.target.value,
    );
  }

  function onChangeTitle(ev) {
    setTitle(
      title = ev.target.value,
    );
  }

  function submit() {
    // Collect the form data into an object
    const formData = {
      title: title,
      content: content,
    };

    // Send the object to the create API
    fetch('/api/create/', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('done!', data);
        props.history.push('/blog/');
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
        value={details}
        onChange={onChangeContent}
      />

      <br />

      <button onClick={submit}>Add to blog</button>
    </div>

  );
}

export default Contribute;
