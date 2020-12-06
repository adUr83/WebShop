import React,{useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'


export default function Product(props) {
const [counter, setCounter] = useState("1")



    const {item} = props 


    const  addItem = (element)=>{

        let temp ;
        if (localStorage.getItem("cart")===null) {
            temp =[]
            let film = element
            film.amount = counter
            temp.push(film)
            localStorage.setItem("cart",JSON.stringify(temp))
        }else {
            temp=JSON.parse(localStorage.getItem("cart"))
            console.log(temp);
            let film = element
            film.amount = counter
            temp.push(film)
            localStorage.setItem("cart",JSON.stringify(temp))
        }
           }

         const  handleChange =(e)=>{
                setCounter(parseInt(e.target.value))
                console.log(counter)
         }


    return (
        <div>
            <Col md={4}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.imageUrl} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    <Row>
        <Col>
    <Button onClick={()=>addItem(item)} variant="success">Add to Cart  {item.price}€</Button>
    </Col>
    <Col>
    <InputGroup className="mb-3 p-4"  >
    <FormControl

    value={counter}
    name="counter"
    onChange={handleChange}
      placeholder="amount" 
      type="number" 
      min="1"
      aria-label="Amount (to the nearest dollar)"
    />

    <InputGroup.Append>
    
    <InputGroup.Text>{counter * (item.price)}</InputGroup.Text>
    <InputGroup.Text>$</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  </Col>
    </Row>
  </Card.Body>
</Card>
</Col>
        </div>
    )
}
