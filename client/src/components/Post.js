import { useState } from 'react'
import { Button, Collapse, Container } from 'react-bootstrap'
import Comment from './Comment'
import axios from 'axios'
import { BASE_URL } from '../globals'
import NewComment from './NewComment'
import { LinkPreview } from '@dhaiwat10/react-link-preview'

export default function Post(props) {
  const post = props.post
  const comments = post.comments
  const [show, setShow] = useState(false)
  const languageList = listFormat(post.languageDisplay)
  const skillsList = listFormat(post.skillDisplay)

  function listFormat(str) {
    const arr = str[0].split(' ')
    let list = ''
    arr.map((element, i) => {
      if (i <= arr.length - 3) {
        list += `${element}, `
      } else if (i === arr.length - 2 && arr.length > 2) {
        list += `${element}, & `
      } else if (i === arr.length - 2 && arr.length === 2) {
        list += `${element} & `
      } else if (i === arr.length - 1) {
        list += `${element}`
      }
      return list
    })
    return list
  }

  async function deletePost() {
    await axios.delete(`${BASE_URL}/d_post/${post._id}`)
    props.postRender ? props.setPostRender(false) : props.setPostRender(true)
  }

  function Fallback() {
    return (
      <div className="linkRow">
        Link: <a href={`${post.link}`}>Useful Resource</a>
      </div>
    )
  }

  async function customFetcher(url) {
    const response = await axios.get(
      `https://link-previews47.herokuapp.com/v2?url=${url}&
      description=${post.descriptionDisplay}`
    )
    const json = response.json()
    return json.metadata
  }

  return (
    <Container>
      <div className="postInfo">
        <div className="infoRow titles">
          <div className="title info">Posted By:</div>
          <div className="title info">Technology(ies): </div>
          <div className="title info">Skill(s): </div>
        </div>
        <div className="infoRow postContents">
          <div className="info">{`${post.userDisplay}`}</div>
          <div className="info">{languageList}</div>
          <div className="info">{skillsList}</div>
        </div>
        <LinkPreview
          id="Link"
          fallback={<Fallback />}
          url={post.link}
          width="60vw"
          borderRadius="0"
          openInNewTab={true}
          backgroundColor="#dac59f"
          customFetcher={customFetcher}
        />
        <div className="descRow">{post.descriptionDisplay}</div>
      </div>
      <div className="btnRow">
        <Button
          variant="secondary"
          type="button"
          className="btn"
          id="showComments"
          aria-controls="commentCont"
          aria-expanded={show}
          onClick={() => setShow(!show)}
        >
          Comments
        </Button>
        <Button
          variant="danger"
          type="button"
          className="btn"
          id="deletePost"
          onClick={deletePost}
        >
          Delete Post
        </Button>
      </div>
      <Collapse in={show}>
        <div id="commentCont">
          <NewComment
            postId={post._id}
            postRender={props.postRender}
            setPostRender={props.setPostRender}
          />
          {comments.map((comment, i) => (
            <Comment
              key={comment._id}
              id={comment._id}
              bckgrnd={i % 2 ? '#dac59f' : '#f0e1c0'}
              user={comment.userDisplay}
              comment={comment.commentDisplay}
              postRender={props.postRender}
              setPostRender={props.setPostRender}
            />
          ))}
        </div>
      </Collapse>
    </Container>
  )
}
