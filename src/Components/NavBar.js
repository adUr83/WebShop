import React,{useState ,useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'





const NavBar=()=> {
  const [searchValue, setSearchValue] = useState("")
    const history = useHistory()
  
const [category, setCategory] = useState([])



useEffect(() => {

    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/categories').then((res)=>{
        let categories = res.data
        console.log(categories);
        setCategory(categories)

        })  


}, [])
const handleChange =(e)=>{

setSearchValue(e.target.value)
}

const searching =()=>{
window.location.href=`/search/${searchValue}`
}
const renderHtml = category.map((item,index)=>{
    return (
    <NavDropdown.Item href={`/product/cat/${item.id}/${item.name}`}>{item.name}</NavDropdown.Item>
        // <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
        // <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        // <NavDropdown.Divider />
        // <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> 
    )
})
    return (
        <div>
            
            <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Adem WebShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/admin">Admin</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
         { renderHtml }

        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl value={searchValue} onChange={handleChange} name="searchValue" type="text" placeholder="Search" className="mr-sm-2" />
      <Button onClick={searching} variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


        </div>
    )
}
export default NavBar