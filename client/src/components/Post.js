import React from 'react'
import Comment from './Comment'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default function Post(props) {
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
      {/* <div className="container overflow-hidden"> */}
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
      <Comment comments={props.comments} />
    </div>
  )
}
