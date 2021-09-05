import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function NewPost(props) {
  const [username, setUsername] = useState('')
  const [language, setLanguage] = useState('')
  const [skill, setSkill] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')

  const userForm = (e) => {
    setUsername(e.target.value)
  }
  const skillForm = (e) => {
    setSkill(e.target.value)
  }
  const descriptionForm = (e) => {
    setDescription(e.target.value)
  }
  const linkForm = (e) => {
    setLink(e.target.value)
  }
  const languageForm = (e) => {
    setLanguage(e.target.value)
  }

  const createPostOnSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      language: [`${language.toLowerCase()}`],
      languageDisplay: [`${language}`],
      descriptionDisplay: `${language}`,
      description: `${description}`,
      comments: [],
      skill: [`${skill.toLowerCase()}`],
      skillDisplay: [`${skill}`],
      user: `${username.toLowerCase()}`,
      userDisplay: `${username}`,
      link: `${link}`
    }

    await axios.post(`${BASE_URL}/cpost`, newPost)

    return props.postRender
      ? props.setPostRender(false)
      : props.setPostRender(true)
  }
  return (
    <Form
      onSubmit={(e) => {
        createPostOnSubmit(e)
      }}
    >
      <Form.Group className="mb-3" controlId="userInput">
        <Form.Label>User</Form.Label>
        <Form.Control
          value={props.value}
          type="text"
          placeholder="Enter UserName"
          onChange={(e) => userForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="languageInput">
        <Form.Label>Relevant Language(s)</Form.Label>
        <Form.Control
          value={props.value}
          type="text"
          placeholder="Enter Language(s)"
          onChange={(e) => languageForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="skillInput">
        <Form.Label>Relevant Skill(s)</Form.Label>
        <Form.Control
          value={props.value}
          type="text"
          placeholder="Enter Skill(s)"
          onChange={(e) => skillForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descriptionInput">
        <Form.Label>User Description</Form.Label>
        <Form.Control
          value={props.value}
          type="text"
          placeholder="Enter Your Description Here"
          onChange={(e) => descriptionForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="linkInput">
        <Form.Label>Resource Link</Form.Label>
        <Form.Control
          value={props.value}
          type="text"
          placeholder="Enter Link Here"
          onChange={(e) => linkForm(e)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
