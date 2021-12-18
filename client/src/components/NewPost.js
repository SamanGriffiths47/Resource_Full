import { useState } from 'react'
import { Container, Button, Form, FormLabel } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function NewPost(props) {
  const iState = {
    userName: '',
    technology: '',
    skill: '',
    description: '',
    link: ''
  }
  const [form, setForm] = useState(iState)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const createPostOnSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      language: [`${form.technology.toLowerCase()}`],
      languageDisplay: [`${form.technology}`],
      descriptionDisplay: `${form.description}`,
      description: `${form.description}`,
      comments: [],
      skill: [`${form.skill.toLowerCase()}`],
      skillDisplay: [`${form.skill}`],
      user: `${form.userName.toLowerCase()}`,
      userDisplay: `${form.userName}`,
      link: `${form.link}`
    }

    await axios.post(`${BASE_URL}/cpost`, newPost)

    setForm(iState)

    return props.postRender
      ? props.setPostRender(false)
      : props.setPostRender(true)
  }
  return (
    <Container className="newPost">
      <Form onSubmit={(e) => createPostOnSubmit(e)}>
        <Form.Label>New Post Form</Form.Label>
        <div className="formInps">
          <div className="inpOne">
            <Form.Label>Username</Form.Label>
            <Form.Label>Technology(ies)</Form.Label>
            <Form.Label>Skill(s)</Form.Label>
          </div>
          <Form.Group className="mb-3 inpOne">
            <Form.Control
              value={form.userName}
              type="text"
              placeholder="i.e. Pickle_Rick45"
              id="UserName"
              name="userName"
              onChange={(e) => onChange(e)}
            />
            <Form.Control
              value={form.technology}
              type="text"
              placeholder="i.e. JavaScript AngularJs"
              name="technology"
              onChange={(e) => onChange(e)}
            />
            <Form.Control
              value={form.skill}
              type="text"
              placeholder="i.e. while_loop seeding"
              id="Skill"
              name="skill"
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Control
            value={form.description}
            type="text"
            placeholder="Description"
            as="textarea"
            id="Description"
            name="description"
            onChange={(e) => onChange(e)}
          />
          <Form.Group className="newPostFooter">
            <Form.Control
              value={form.link}
              type="text"
              placeholder="Resource Link"
              onChange={(e) => onChange(e)}
              id="Link"
              name="link"
            />
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary newPostBtn"
            >
              Submit
            </Button>
          </Form.Group>
        </div>
      </Form>
    </Container>
  )
}
