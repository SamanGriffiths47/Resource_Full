import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

export default function Navigation(props) {
  const up = '▲'
  const down = '▼'
  const [triangle1, triangle1Toggle] = useState(`${down}`)
  const [triangle2, triangle2Toggle] = useState(`${down}`)

  const catOnClick = (e) => {
    props.changeCategory(e.target.innerText)
  }

  const handleChange = (e) => {
    props.setSearchQuery(e.target.value)
  }

  const toggleTriangle1 = () => {
    triangle1 === down ? triangle1Toggle(`${up}`) : triangle1Toggle(`${down}`)
  }
  const toggleTriangle2 = () => {
    triangle2 === down ? triangle2Toggle(`${up}`) : triangle2Toggle(`${down}`)
  }
  const categories = () => {
    return (
      <NavDropdown
        title={`Search: ${props.category} ${triangle1}`}
        onClick={toggleTriangle1}
        id="categories"
      >
        <NavDropdown.Item onClick={catOnClick}>Posts</NavDropdown.Item>
        <NavDropdown.Item onClick={catOnClick}>Comments</NavDropdown.Item>
        <NavDropdown.Item onClick={catOnClick}>Users</NavDropdown.Item>
      </NavDropdown>
    )
  }

  const keywords = () => {
    return (
      <NavDropdown
        title={`By: ${props.keyword} ${triangle2}`}
        onClick={toggleTriangle2}
        id="keywords"
      >
        {props.dd()}
      </NavDropdown>
    )
  }

  useEffect(() => {
    categories()
  }, [triangle1])

  useEffect(() => {
    keywords()
  }, [triangle2])

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" className="imgButton">
        <img src="./images/logo.png" alt="logo" className="img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
          {/* <Nav.Link href="#action1">Home</Nav.Link> */}
          {/* <Nav.Link href="#action2">Link</Nav.Link> */}
          {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
          {categories()}

          {keywords()}
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
