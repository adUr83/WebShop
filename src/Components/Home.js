import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Product from './Product'



export default function Home() {

    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products').then((res)=>{
        let Products = res.data
        console.log(Products);
        setAllProducts(Products)

        })     



    }, [])



   
    let renderHtml = allProducts.map((item,index)=>{
        return (

          
               <Product item={item}/>

     
     
     
    
  
        )
    })
    return (
     
              <Container>
                    <Row>
              {renderHtml} 
              </Row>
              </Container>
       
    )
}
