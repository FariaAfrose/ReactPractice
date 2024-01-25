import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);

  const handelDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
useEffect(() => {
fetch('http://localhost:8001/blogs').then((res) => res.json()).then((data)=>{
  setBlogs(data);
});
}, []);
return (
  <div className="Home">
    <h2>
      HomePage
    </h2>
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handelDelete={handelDelete} />}
  </div>
);
}
export default Home;
