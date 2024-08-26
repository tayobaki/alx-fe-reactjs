import React, { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam laudantium amet, optio, quasi necessitatibus similique adipisci assumenda laboriosam expedita nisi voluptatibus, vitae id repellat quisquam fugiat explicabo maxime odit. */}
    </>
  )
}

export default App
