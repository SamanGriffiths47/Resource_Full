import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

export default function Dropdowns(props) {
  const up = '▲'
  const down = '▼'
  const dropDownDefault = 'Choose One'
  const [catShow, setCatShow] = useState(false)
  const [keyShow, setKeyShow] = useState(false)
  const triangle1 = catShow ? `${up}` : `${down}`
  const triangle2 = keyShow ? `${up}` : `${down}`
  const [category, changeCategory] = useState(dropDownDefault)
  const [keyword, changeKeyword] = useState(dropDownDefault)

  const keyOnClick = (e) => {
    if (['Posts', 'Comments', 'Users'].includes(category)) {
      changeKeyword(e.target.innerText)
    }
  }

  const catOnClick = (e) => {
    changeCategory(e.target.innerText)
    changeKeyword(dropDownDefault)
  }

  const navBarShow = () => {
    keyShow || catShow
      ? !Object.values(
          document.querySelector('#navbarScroll').classList
        ).includes('show') &&
        document.querySelector('#navbarScroll').classList.add('show')
      : Object.values(
          document.querySelector('#navbarScroll').classList
        ).includes('show') &&
        document.querySelector('#navbarScroll').classList.remove('show')

    // if (window.innerWidth < 992) {
    //   if (catShow || keyShow) {
    //     !Object.values(
    //       document.querySelector('#navbarScroll').classList
    //     ).includes('show') &&
    //       document.querySelector('#navbarScroll').classList.add('show')
    //     document.querySelector('.navbar-toggler').classList.remove('collapsed')
    //   }
    // } else {
    //   console.log(
    //     'SCROLL',
    //     Object.values(document.querySelector('#navbarScroll').classList)
    //   )
    // Object.values(document.querySelector('#navbarScroll').classList).includes(
    //   'show'
    // ) && document.querySelector('#navbarScroll').classList.remove('show')
    // }
  }
  window.addEventListener('resize', navBarShow)

  const categoryDropDown = () => {
    keyShow && setKeyShow(false)
    setCatShow(!catShow)
  }

  const keyWordDropDown = () => {
    catShow && setCatShow(false)
    setKeyShow(!keyShow)
  }

  function dropDownList() {
    let listItems = []
    const defaul = 'Choose A Search Category'
    if (category === 'Posts') {
      listItems = ['Skill', 'User', 'Technology', 'Keywords']
    } else if (category === 'Comments') {
      listItems = ['User', 'Keywords']
    } else if (category === 'Users') {
      listItems = ['Name']
    } else {
      listItems = [defaul]
    }
    return (
      <Collapse in={keyShow} className="dropDownDiv">
        <ul id="searchKeywords">
          {listItems.map((item, index) => (
            <li
              key={index}
              onClick={keyOnClick}
              className={listItems.includes(defaul) && 'default'}
            >
              {item}
            </li>
          ))}
        </ul>
      </Collapse>
    )
  }
  return (
    <section id="navDropDown">
      <div
        onClick={categoryDropDown}
        id="categories"
        className="navDropDown"
        aria-controls="searchCategories"
        aria-expanded={catShow}
      >
        <label htmlFor="searchCategories">{`Search: ${category} ${triangle1}`}</label>
        <Collapse in={catShow} className="dropDownDiv">
          <ul id="searchCategories">
            <li onClick={catOnClick}>Posts</li>
            <li onClick={catOnClick}>Comments</li>
            <li onClick={catOnClick}>Users</li>
          </ul>
        </Collapse>
      </div>
      <div
        onClick={keyWordDropDown}
        id="keywords"
        className="navDropDown"
        aria-controls="searchKeywords"
        aria-expanded={keyShow}
      >
        <label htmlFor="searchKeywords">{`By: ${keyword} ${triangle2}`}</label>
        {dropDownList()}
      </div>
    </section>
  )
}
