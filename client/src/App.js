import React, { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import './App.css'
import Navigation from './components/Nav'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdowns from './components/Dropdowns'
import Post from './components/Post'
import axios from 'axios'
import NewPost from './components/NewPost'

function App() {
  const dropDownDefault = 'Choose One'
  const [posts, setPosts] = useState([])
  const [category, changeCategory] = useState(dropDownDefault)
  const [keyword, changeKeyword] = useState(dropDownDefault)
  const [postRender, setPostRender] = useState(false)

  const grabPosts = async () => {
    const res = await axios.get(`${BASE_URL}/posts`)
    setPosts(res.data.posts)
  }

  const keyOnClick = (e) => {
    changeKeyword(e.target.innerText)
  }
  const dd = () => {
    return <Dropdowns keyOnClick={keyOnClick} category={category} />
  }
  useEffect(() => {
    grabPosts()
  }, [postRender])
  useEffect(() => {
    dd()
  }, [category])
  console.log(posts)
  return (
    <div className="App">
      <Navigation
        category={category}
        changeCategory={changeCategory}
        keyword={keyword}
        changeKeyword={changeKeyword}
        dropDownDefault={dropDownDefault}
        dd={dd}
      />

      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <div className="postDisplay">
              <NewPost
                {...props}
                postRender={postRender}
                setPostRender={setPostRender}
              />
              {posts.map((one) => {
                return (
                  <section>
                    <Post
                      {...props}
                      key={one._id}
                      id={one._id}
                      comments={one.comments}
                      description={one.descriptionDisplay}
                      languages={one.languageDisplay}
                      link={one.link}
                      skills={one.skillDisplay}
                      user={one.userDisplay}
                    />
                  </section>
                )
              })}
            </div>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
