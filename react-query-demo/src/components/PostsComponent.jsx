import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


function PostsComponent() {
  const queryClient = useQueryClient()
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => queryClient.invalidateQueries('posts')}>
        Refetch Posts
      </button>
    </div>
  );
}

export default PostsComponent;
