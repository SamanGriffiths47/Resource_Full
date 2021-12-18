import React from 'react'
import Button from 'react-bootstrap/Button'
import { BASE_URL } from '../globals'
import axios from 'axios'

export default function Comment(props) {
  const deleteCommentOnSubmit = async (e) => {
    await axios.delete(`${BASE_URL}/d_comment/${props.id}`)
    return props.commentRender
      ? props.setCommentRender(false)
      : props.setCommentRender(true)
  }

  return (
    <section style={{ backgroundColor: props.bckgrnd }} className="commentCont">
      <p className="commentBody">
        <b>{props.user}:</b> {props.comment}
      </p>
      <Button
        type="button"
        variant="danger"
        onClick={(e) => {
          deleteCommentOnSubmit(e)
        }}
      >
        Delete
      </Button>
    </section>
  )
}
