import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import Post from './Post'
import axios from 'axios'
import NewPost from './NewPost'

export default function PostDisplay(props) {
  const [posts, setPosts] = useState([])
  const [postRender, setPostRender] = useState(undefined)

  const grabPosts = async () => {
    const res = await axios.get(`${BASE_URL}/posts`)
    setPosts(res.data.posts.reverse())
  }

  useEffect(() => {
    grabPosts()
  }, [postRender])
  return (
    <div className="postCont">
      <NewPost
        {...props}
        postRender={postRender}
        setPostRender={setPostRender}
      />
      {posts.map((post, index) => (
        <Post
          {...props}
          key={index}
          post={post}
          setPostRender={setPostRender}
          postRender={postRender}
        />
      ))}
    </div>
  )
}
