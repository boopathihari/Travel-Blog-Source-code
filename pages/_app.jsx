import '@/styles/globals.css'
import BlogContext from '@/contexts/blog'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [posts, setPosts] = useState({
    blogs: [],
    docs: []
  })
  return (
    <BlogContext.Provider value={{ posts, setPosts }}>
      <Component {...pageProps} />
    </BlogContext.Provider>
  )
}