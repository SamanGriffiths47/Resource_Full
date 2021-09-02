import React from 'react'
import Search from './Search'
import axios from 'axios'
import Dropdowns from './Dropdowns'

export default function Nav(props) {
  const getSearchResults = async (e) => {
    e.preventDefault()
    const search = await axios.get(`f`)
    props.setSearchQuery('')
    props.setSearchResults(search.data.results)
    props.toggleSearched(true)
  }

  const handleChange = (e) => {
    props.setSearchQuery(e.target.value)
  }
  return (
    <nav>
      <a href="..." className="anchor">
        <img className="navimg" src="./images/logo.png" alt="logo" />
      </a>
      <Search onChange={handleChange} onSubmit={getSearchResults} />
      <Dropdowns
        category={props.category}
        changeCategory={props.changeCategory}
        keyword={props.keyword}
        changeKeyword={props.changeKeyword}
      />
    </nav>
  )
}
