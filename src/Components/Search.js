import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from './Product'
import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'


export default function Search() {

    let params =useParams()
console.log(params);
const [searchProduct, setSearchProduct] = useState([])
useEffect(() => {
  
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products').then((res)=>{
        let products = res.data
        console.log(products);
     let fltSearch = products.filter((item)=>{
         if(item.name.toLowerCase().includes(params.name.toLowerCase())) {
             return item
         }
         return null;

        //  if(params.name ===item.name)
     })
     setSearchProduct(fltSearch)
        })  


}, [params.name])

let renderHtml = searchProduct.map((item,index)=>{
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
