import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const handelDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8001/blogs').then((res) => {
        if (!res.ok) {
    throw Error('Code Not Fatch the data for that resource');
        }
       return res.json();
      }).then((data) => {
      setBlogs(data);
      setPending(false);
      setError(null);
    }).catch((err) => {
      setPending(false);
    setError(err.message);
    });
    }, 1000);
    }, []);
return (
  <div className="Home">
    <h2>
      HomePage
    </h2>
    {error && <div>{error }</div>}
    {isPending && <div>Loding.. </div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" handelDelete={handelDelete} />}
  </div>
);
}
export default Home;
