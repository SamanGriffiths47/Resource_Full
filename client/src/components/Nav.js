import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Dropdowns from './Dropdowns'

export default function Navigation(props) {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="" className="imgButton">
        <img src="./images/logo.png" alt="logo" className="img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <section id="searchFunc">
          <Dropdowns />
          <Form className="d-flex" onSubmit={(e) => props.onSubmit(e)}>
            <FormControl
              type="search"
              placeholder="Your Search Here"
              className="mr-2"
              id="search"
              aria-label="Search"
              value={props.value}
              onChange={(e) => props.onChange(e)}
            />
            <button type="submit" id="btn">
              <img src="./images/search-icon.png" alt="logo" />
            </button>
          </Form>
        </section>
      </Navbar.Collapse>
    </Navbar>
    // <Search onChange={handleChange} onSubmit={getSearchResults} />
    // <Dropdowns
    //   category={props.category}
    //   changeCategory={props.changeCategory}
    //   keyword={props.keyword}
    //   changeKeyword={props.changeKeyword}
    // />
  )
}
