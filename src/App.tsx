import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header"
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import "./global.css"
import styles from './App.module.css';
import { PostProps } from "./typings/typings";

export function App() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch("http://localhost:3004/posts")
      const data = await response.json()
      setPosts(data)
    }
    loadPosts()
  }, [])

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.key}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
