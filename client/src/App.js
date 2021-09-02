import React, { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [request, changeIt] = useState(false)
  const [category, changeCategory] = useState('choose one')
  const [keyword, changeKeyword] = useState('choose one')

  return (
    <div className="App">
      <Nav
        toggleSearched={toggleSearched}
        setSearchQuery={setSearchQuery}
        setSearchResults={setSearchResults}
        category={category}
        changeCategory={changeCategory}
        keyword={keyword}
        changeKeyword={changeKeyword}
      />
    </div>
  )
}

export default App
