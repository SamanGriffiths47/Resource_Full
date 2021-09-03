import React from 'react'
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
  })

  console.log(skillsList)
  return (
    <section>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>{`Posted By: ${props.user}`}</th>
            <th>{`Language(s): ${languageList}`}</th>
            <th>{`Skill(s): ${skillsList}`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`Link: ${props.link}`}</td>
            <td>dd</td>
            <td>dd</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
