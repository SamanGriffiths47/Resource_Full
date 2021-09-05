import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewPost() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="userInput">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="languageInput">
        <Form.Label>Relevant Language(s)</Form.Label>
        <Form.Control type="text" placeholder="Enter Language(s)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="skillInput">
        <Form.Label>Relevant Skill(s)</Form.Label>
        <Form.Control type="text" placeholder="Enter Skill(s)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descriptionInput">
        <Form.Label>User Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
