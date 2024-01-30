import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8001/blogs');
return (
  <div className="Home">
    <h2>
      HomePage
    </h2>
    {error && <div>{error }</div>}
    {isPending && <div>Loding.. </div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
  </div>
);
}
export default Home;
