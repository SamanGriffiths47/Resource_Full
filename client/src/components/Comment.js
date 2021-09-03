import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function Comment(props) {
  const [comments, setComments] = useState([])

  const grabComments = () => {
    props.comments.map(async (com) => {
      const res = await axios.get(`${BASE_URL}/c_id/${com}`)
      const info = res.data.comment
      setComments((prevState) => [...prevState, info])
    })
  }
  useEffect(() => {
    grabComments()
  }, [])

  console.log(comments)
  return <div>
    {comments.map((com) =>{
      return <div>{com.userDisplay}</div>
      <div></div>
    })}
  </div>
}
