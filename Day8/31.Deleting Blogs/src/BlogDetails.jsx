import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8001/blogs/${id}`);
    const history = useHistory();

    const handelClick = () => {
fetch(`http://localhost:8001/blogs/${blog.id}`, {
  method: 'DELETE',
}).then(() => {
  history.push('/');
});
   };
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
      { blog.author }
    </p>
    <div>{ blog.body }</div>
    <button type="button" className="pageInsideBtn" onClick={handelClick}>delete</button>
  </article>
)
}
      </div>
    );
}

export default BlogDetails;
