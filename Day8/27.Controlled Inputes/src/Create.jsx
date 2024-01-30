import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState(' ');
  const [body, setBody] = useState(' ');
  const [author, setAuthor] = useState('Aki ');
    return (
      <div className="create">
        <h2>Add a New BLog</h2>
        <form>
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
          <button type="button">Add blog</button>
          <p>
            Title:

            {title}
          </p>
          <p>
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
        </form>
      </div>
    );
}

export default Create;
