import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8001/blogs/${id}`);
    return (
      <div className="blogs-details">
        {isPending && <div>Loding.. </div>}
        {error && <div>{error }</div>}
        {
  blog && (
  <article>
    <h2 className="blogBody">{blog.title}</h2>
    <p>
      Writen by
      {' '}
      {blog.author}
    </p>
    <duv>{blog.body}</duv>
  </article>
)
}
      </div>
    );
}

export default BlogDetails;
