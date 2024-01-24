import React from 'react';

function BlogList(props) {
    const blogs = props.blogs;
    const title = props.title;
     return ( 
       <div className='blog-list'>
      <p className="blog-p">{title}</p>
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
export default BlogList;