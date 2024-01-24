import React, { useState } from 'react';

function Home() {
  const [blogs, setBlogs] = useState([
    {
 title: 'My new Page', body: 'Laboris aliquip eu elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'Aki', id: 1,
    },
    {
 title: 'My new website', body: 'Laboris  elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'kai', id: 2,
    },
    {
 title: 'My new social', body: ' elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'Faria', id: 3,
    },
  ]);

  return (
    <div className="Home">
      <h2>
        HomePage
      </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            {blog.title}
          </h2>
          <p>
            Write by
            {' '}
            {blog.author}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Home;
