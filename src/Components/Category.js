import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Row from 'react-bootstrap/Row'

import Container from 'react-bootstrap/Container'
import Product from './Product'


export default function Category() {
let params = useParams()
const [categories, setCategories] = useState([])

useEffect(() => {
   
    axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products').then((res)=>{
        let cate = res.data
        console.log(cate);
       let fltData = [];
      
       cate.forEach((element,index)=>{
           let temp = element.productCategory.filter((el,i)=>{
               if(el.categoryId===Number(params.id)){
                   return el
               }
               return null
           })
           if(temp.length> 0 ){
            fltData.push(element)
           }
       })
       setCategories(fltData)

        })   


}, [params.id])

const filterHtml = categories.map((item,index)=>{
    return(
        <Product item={item}/>

    )
})
    return (
        <Container>
        <Row>
  {filterHtml} 
  </Row>
  </Container>
    )
}
