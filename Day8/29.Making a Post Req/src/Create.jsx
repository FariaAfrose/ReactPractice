import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState(' ');
  const [body, setBody] = useState(' ');
  const [author, setAuthor] = useState('Aki ');
  const [isPending, setIsPending] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch(
'http://localhost:8001/blogs ',
     {
 method: 'Post',
     headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(blog),
    },
).then(() => {
    console.log('New blog added');
    setIsPending(false);
    });
  };
    return (
      <div className="create">
        <h2>Add a New BLog</h2>
        <form onSubmit={handelSubmit}>
          <label htmlFor="blogBody"> Blog title: </label>
          <input
            type="text
            required "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="blogBody">Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label htmlFor="blogBody">Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Aki">Aki</option>
            <option value="Kai">kai</option>
            <option value="Faria">Faria</option>
          </select>
          {!isPending && <button type="submit">Add blog</button>}
          {isPending && <button type="button" disabled> Adding blog...</button>}
        </form>

      </div>
    );
}

export default Create;
