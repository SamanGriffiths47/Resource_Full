import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewComment(props) {
  return (
    <form onSubmit={(e) => props.createCommentOnSubmit(e)}>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Username"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          value={props.value}
          z
          onChange={(e) => props.userForm(e)}
        />
        <Button variant="outline-primary" type="submit">
          Comment
        </Button>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingTextarea2"
        onChange={(e) => props.commentForm(e)}
        label="Leave a comment here"
      >
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
          value={props.value}
        />
      </FloatingLabel>
    </form>
  )
}
