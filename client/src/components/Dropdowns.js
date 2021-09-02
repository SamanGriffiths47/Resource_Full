import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Dropdowns(props) {
  return (
    <section className="dropdowns">
      <NavDropdown.Item onClick={props.keyOnClick}>Posts</NavDropdown.Item>
      <NavDropdown.Item onClick={props.keyOnClick}>Comments</NavDropdown.Item>
      <NavDropdown.Item onClick={props.keyOnClick}>Users</NavDropdown.Item>
    </section>
  )
}
