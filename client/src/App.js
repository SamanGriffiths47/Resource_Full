import React, { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import './App.css'
import Navigation from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdowns from './components/Dropdowns'
import Post from './components/Post'
import axios from 'axios'

function App() {
  const dropDownDefault = 'Choose One'
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [request, toggleRequest] = useState(false)
  const [category, changeCategory] = useState(dropDownDefault)
  const [keyword, changeKeyword] = useState(dropDownDefault)

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
  }, [request])
  useEffect(() => {
    dd()
  }, [category])

  return (
    <div className="App">
      <Navigation
        toggleSearched={toggleSearched}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        category={category}
        changeCategory={changeCategory}
        keyword={keyword}
        changeKeyword={changeKeyword}
        dropDownDefault={dropDownDefault}
        dd={dd}
      />
      {/* <Post
      key={one.id}
      comments={one.comments}
      description={one.descriptionDisplay}
      languages={one.languageDisplay}
      link={one.link}
      skills={one.skillDisplay}
      user={one.userDisplay}
      /> */}
      {posts.map((one) => {
        return (
          <Post
            key={one._id}
            comments={one.comments}
            description={one.descriptionDisplay}
            languages={one.languageDisplay}
            link={one.link}
            skills={one.skillDisplay}
            user={one.userDisplay}
          />
        )
      })}
    </div>
  )
}

export default App
