import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BASE_URL } from '../globals'
import axios from 'axios'

export default function NewComment(props) {
  const iState = {
    userName: '',
    comment: ''
  }
  const [form, setForm] = useState(iState)

  const createCommentOnSubmit = async (e) => {
    e.preventDefault()

    const newComment = {
      comment: `${form.comment.toLowerCase()}`,
      commentDisplay: `${form.comment}`,
      parentPost: `${props.postId}`,
      user: `${form.userName.toLowerCase()}`,
      userDisplay: `${form.userName}`
    }

    await axios.post(`${BASE_URL}/ccomment`, newComment)

    setForm(iState)

    props.postRender ? props.setPostRender(false) : props.setPostRender(true)
  }

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Form onSubmit={(e) => createCommentOnSubmit(e)}>
      <Form.Group id="commentHeader">
        <Form.Control
          value={form.userName}
          name="userName"
          placeholder="User Name"
          id="userName"
          onChange={(e) => onChange(e)}
        />
        <Button variant="outline-primary" type="submit">
          Comment
        </Button>
      </Form.Group>
      <Form.Control
        as="textarea"
        onChange={(e) => onChange(e)}
        id="comment"
        name="comment"
        value={form.comment}
        placeholder="Leave a comment here"
      />
    </Form>
  )
}
