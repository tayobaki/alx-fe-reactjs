// src/components/Blog.jsx
import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <h2>Blog Post {id}</h2>;
};

const BlogList = () => (
  <div>
    <h2>Blog Posts</h2>
    <ul>
      <li><Link to="/blog/1">Post 1</Link></li>
      <li><Link to="/blog/2">Post 2</Link></li>
      <li><Link to="/blog/3">Post 3</Link></li>
    </ul>
  </div>
);

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Routes>
        <Route index element={<BlogList />} />
        <Route path=":id" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;