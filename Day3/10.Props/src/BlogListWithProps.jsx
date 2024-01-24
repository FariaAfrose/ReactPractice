/* eslint-disable prefer-destructuring */
import React from 'react';

function BlogListWithProps(props) {
  const blogs2 = props.blogs2;
  console.log(props, blogs2);
  return (
    <div className="block-list2">
      {blogs2.map((blog2) => (
        <div className="blog-preview2" key={blog2.id}>
          <h2>
            {blog2.title}
          </h2>
          <p>
            Write by
            {' '}
            {blog2.author}
          </p>
        </div>
      ))}
    </div>
  );
}
export default BlogListWithProps;
