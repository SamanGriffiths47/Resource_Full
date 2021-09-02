import React, { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import './App.css'
import Navigation from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const dropDownDefault = 'Choose One'
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [request, changeIt] = useState(false)
  const [category, changeCategory] = useState(dropDownDefault)
  const [keyword, changeKeyword] = useState(dropDownDefault)

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
      />
    </div>
  )
}

export default App
