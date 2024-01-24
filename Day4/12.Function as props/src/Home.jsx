import React, { useState } from 'react';
import BlogList from './BlogList';

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
  const handelDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="Home">
      <h2>
        HomePage
      </h2>
      <BlogList blogs={blogs} title="All Blogs!" handelDelete={handelDelete} />
    </div>
  );
}
export default Home;
