import React from 'react'
import { BASE_URL } from './globals'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [color, setColor] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [request, changeIt] = useState(false)

  return <div className="App"></div>
}

export default App
