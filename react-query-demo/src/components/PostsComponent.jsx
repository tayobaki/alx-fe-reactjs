import React from 'react'
import { useQuery, QueryClient, useQueryClient } from 'react-query'

const endpoint = 'https://jsonplaceholder.typicode.com/posts'

const queryClient = useQueryClient()

const PostsComponent = ({ }) => {
  const { data: posts, isLoading, error, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch(endpoint)
      if (!res.ok) {
        throw new Error("Network response was not ok");

      }
      return res.json()
    }
  })

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;


  return (
    <div style={{
      fontSize: '10px',
      margin: '1rem'
    }}>
      {posts?.slice(0, 20).map((post) => (
        <div key={post.id} className="">
          <span style={{
            marginRight: '3px'
          }}>{post.id}</span>
          <span style={{
            fontWeight: 'bold'
          }}>{post.title}</span>
        </div>
      ))}

      <button onClick={() => queryClient.invalidateQueries('posts')}>
        Refetch Posts
      </button>
    </div>
  )
}

export default PostsComponent
