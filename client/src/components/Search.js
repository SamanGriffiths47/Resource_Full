import React from 'react'

export default function Search(props) {
  return (
    <form onSubmit={(e) => props.onSubmit(e)} className="search">
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Your Search Here"
        onChange={(e) => props.onChange(e)}
      />
      <button type="submit">
        <img src="./images/search-icon.png" alt="logo" width="30px" />
      </button>
    </form>
  )
}
