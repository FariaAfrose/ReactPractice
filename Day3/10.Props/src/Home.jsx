import React, { useState } from 'react';
import BlogListWithoutProps from './BlogListWithoutProps';
import BlogListWithProps from './BlogListWithProps';

function Home() {
  const [blogs2, setBlogs2] = useState([
    {
 title: 'My new Page2', body: '2Laboris aliquip eu elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'Aki', id: 1,
    },
    {
 title: 'My new website2', body: '2Laboris  elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'kai', id: 2,
    },
    {
 title: 'My new social2', body: ' 2elit minim laboris excepteur proident duis eu consequat consequat nostrud nisi mollit.', author: 'Faria', id: 3,
    },
  ]);
  return (
    <div className="Home">
      <h2>
        HomePage
      </h2>
      <BlogListWithoutProps />
      <BlogListWithProps blogs2={blogs2} />
    </div>
  );
}
export default Home;
