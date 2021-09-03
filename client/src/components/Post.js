import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import axios from 'axios'
import { BASE_URL } from '../globals'
import NewComment from './NewComment'

export default function Post(props) {
  const [comments, setComments] = useState([])
  const [username, setUsername] = useState('')
  const [comment, setComment] = useState('')
  const [commentRender, setCommentRender] = useState(false)
  let languageList = ''
  let str = ''
  let skillsList = ''

  props.languages.map((language, i) => {
    if (i <= props.languages.length - 3) {
      str = `${language}, `
      languageList += str
    } else if (i === props.languages.length - 2) {
      str = `${language}, & `
      languageList += str
    } else if (i === props.languages.length - 1) {
      str = `${language}`
      languageList += str
    }
    return languageList
  })
  props.skills.map((skill, i) => {
    if (i <= props.skills.length - 3) {
      str = `${skill}, `
      skillsList += str
    } else if (i === props.skills.length - 2) {
      str = `${skill}, & `
      skillsList += str
    } else if (i === props.skills.length - 1) {
      str = `${skill}`
      skillsList += str
    }
    return skillsList
  })

  const commentForm = (e) => {
    setComment(e.target.value)
  }
  const userForm = (e) => {
    setUsername(e.target.value)
  }

  const createCommentOnSubmit = async (e) => {
    e.preventDefault()

    const newComment = {
      comment: `${comment.toLowerCase()}`,
      commentDisplay: `${comment}`,
      parentPost: `${props.id}`,
      user: `${username.toLowerCase()}`,
      userDisplay: `${username}`
    }
    await axios.post(`${BASE_URL}/ccomment`, newComment)
    return commentRender ? setCommentRender(false) : setCommentRender(true)
  }

  const grabComments = async () => {
    const res = await axios.get(`${BASE_URL}/parent_id/${props.id}`)
    setComments(res.data)
  }

  useEffect(() => {
    grabComments()
  }, [commentRender])
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>
              <div>{`Posted By: ${props.user}`}</div>
              <div>{`Language(s): ${languageList}`}</div>
              <div>{`Skill(s): ${skillsList}`}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`Link: ${props.link}`}</td>
          </tr>
        </tbody>
      </table>
      <div className="row gx-5 ">
        <div className="col">
          <div className="p-3 border bg-light">
            <img
              src="./logo192.png"
              alt="react"
              width="20px"
              style={{ marginRight: '10px' }}
            />
            React
          </div>
        </div>
        <div className="col">
          <div className="p-3 border bg-light">Comments</div>
        </div>
      </div>
      <NewComment
        commentForm={commentForm}
        userForm={userForm}
        setComment={setComment}
        setUsername={setUsername}
        createCommentOnSubmit={createCommentOnSubmit}
      />
      {comments.map((item) => {
        return (
          <Comment
            key={item._id}
            id={item._id}
            user={item.userDisplay}
            comment={item.commentDisplay}
            commentRender={commentRender}
            setCommentRender={setCommentRender}
          />
        )
      })}
    </div>
  )
}
