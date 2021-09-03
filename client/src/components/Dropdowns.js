import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Dropdowns(props) {
  if (props.category === 'Posts') {
    return (
      <section className="dropdowns">
        <NavDropdown.Item onClick={props.keyOnClick}>Language</NavDropdown.Item>
        <NavDropdown.Item onClick={props.keyOnClick}>Skill</NavDropdown.Item>
        <NavDropdown.Item onClick={props.keyOnClick}>User</NavDropdown.Item>
        <NavDropdown.Item onClick={props.keyOnClick}>Keywords</NavDropdown.Item>
      </section>
    )
  } else if (props.category === 'Comments') {
    return (
      <section className="dropdowns">
        <NavDropdown.Item onClick={props.keyOnClick}>User</NavDropdown.Item>
        <NavDropdown.Item onClick={props.keyOnClick}>Keywords</NavDropdown.Item>
      </section>
    )
  } else if (props.category === 'Users') {
    return (
      <section className="dropdowns">
        <NavDropdown.Item onClick={props.keyOnClick}>Name</NavDropdown.Item>
      </section>
    )
  } else {
    return (
      <section className="dropdowns" style={{ textAlign: 'center' }}>
        Choose A Search Category
      </section>
    )
  }
}
