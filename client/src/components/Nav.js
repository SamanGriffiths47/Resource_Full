import React from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Search from './Search'
import Dropdowns from './Dropdowns'

export default function Navigation(props) {
  const up = './images/triangle-up.png'
  const down = './images/triangle-down.png'
  let triangle1 = down
  let triangle2 = down
  const triangle1Toggle = () => {
    triangle1 = down ? (triangle1 = up) : (triangle1 = down)
  }
  const triangle2Toggle = () => {
    triangle2 = down ? (triangle2 = up) : (triangle2 = down)
  }
  // const title1 =
  const catOnClick = (e) => {
    props.changeCategory(e.target.innerText)
    // console.log
  }

  const keyOnClick = (e) => {
    props.changeKeyword(e.target.innerText)
  }

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
    // <nav className="navigation">
    //   <a href="..." className="anchor">

    //   </a>

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="imgButton">
        <img
          className="navimg"
          src="./images/logo.png"
          alt="logo"
          className="img"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
          <NavDropdown title={`Search: ${props.category}`} id="categories">
            triangle1
            <NavDropdown.Item onClick={catOnClick}>Posts</NavDropdown.Item>
            <NavDropdown.Item onClick={catOnClick}>Comments</NavDropdown.Item>
            <NavDropdown.Item onClick={catOnClick}>Users</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={`By: ${props.keyword}`}
            for="checkbox"
            id="keywords"
          >
            <Dropdowns keyOnClick={keyOnClick} keyword={props.keyword} />
          </NavDropdown>
        </Nav>
        <Form className="d-flex" onSubmit={(e) => props.onSubmit(e)}>
          <FormControl
            type="search"
            placeholder="Your Search Here"
            className="mr-2"
            id="search"
            aria-label="Search"
            value={props.value}
            onChange={(e) => props.onChange(e)}
          />
          <button type="submit" id="btn">
            <img src="./images/search-icon.png" alt="logo" />
          </button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    // <Search onChange={handleChange} onSubmit={getSearchResults} />
    // <Dropdowns
    //   category={props.category}
    //   changeCategory={props.changeCategory}
    //   keyword={props.keyword}
    //   changeKeyword={props.changeKeyword}
    // />
  )
}
