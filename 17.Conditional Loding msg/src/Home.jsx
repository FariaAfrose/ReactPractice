import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);

  const handelDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
useEffect(() => {
setTimeout(() => {
  fetch('http://localhost:8001/blogs').then((res) => res.json()).then((data)=>{
  setBlogs(data);
  setPending(false);
});
}, 1000);
}, []);
return (
  <div className="Home">
    <h2>
      HomePage
    </h2>
    {isPending && <div>Loding.. </div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handelDelete={handelDelete} />}
  </div>
);
}
export default Home;
