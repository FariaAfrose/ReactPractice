import React from 'react';

function BlogList({ blogs, handelDelete }) {
     return (
       <div className="blog-list">
         { blogs.map((blog) => (
           <div className="blog-preview" key={blog.id}>
             <h2>{blog.title}</h2>
             <p>
               {' '}
               Write by
               {blog.author}
             </p>
             <button type="button" onClick={() => handelDelete(blog.id)}>Delete Blog</button>
           </div>
      ))}
       </div>
     );
   }
export default BlogList;
