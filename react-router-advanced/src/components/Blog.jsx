// src/components/Blog.jsx
import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <h2>Blog Post {id}</h2>;
};

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <nav>
        <ul>
          <li><Link to="/blog/1">Post 1</Link></li>
          <li><Link to="/blog/2">Post 2</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Select a blog post</h2>} />
        <Route path=":id" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;