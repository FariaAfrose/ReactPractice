import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState(' ');
  const [body, setBody] = useState(' ');
  const [author, setAuthor] = useState('Aki ');
  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
  };
    return (
      <div className="create">
        <h2>Add a New BLog</h2>
        <form onSubmit={handelSubmit}>
          <label htmlFor="blogBody"> Blog title: </label>
          <input
            type="text
          requrired"
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
          <button type="submit">Add blog</button>
          <div className="fromOutDiv">
            {' '}
            <p>
              Title:

              {title}
            </p>
            <p className="bodyPara">
              Body:

              {' '}
              {body}
            </p>
            <p>
              {' '}
              Author:

              {' '}
              {author}
            </p>
          </div>
        </form>

      </div>
    );
}

export default Create;
