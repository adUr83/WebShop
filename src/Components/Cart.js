
import Table from 'react-bootstrap/Table'
import React,{useState ,useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Cart() {
const [orders, setOrders] = useState([])
const [totalCount, setTotalCount]=  useState(0)
useEffect(() => {
   
   
    if (localStorage.getItem("cart")!==null) {
       
    let order =JSON.parse(localStorage.getItem("cart"))
      
        setOrders(order)

        let sum =0
        order.forEach(element => {
          sum+=(element.amount*element.price) // urulerinn toplam fiyati
        });

        setTotalCount(sum)
    }


}, [])

const checkOut =()=>{
  

  let preOrder ={};
 let orderId =Math.ceil(Math.random()*3000+5000);


  preOrder.created =new Date()
  preOrder.createdBy ="Adem Ure"
  preOrder.paymentMethod="Master Card"
  preOrder.totalPrice =totalCount
  preOrder.status =0
  preOrder.orderRows =[];


orders.forEach((item)=>{
  preOrder.orderRows.push({
    productId:item.id,
        
        amount: item.amount,
        orderId:  orderId
  })
})

axios.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders',preOrder).then((res)=>{
  localStorage.removeItem("cart")
  setOrders([])
  setTotalCount(0)
  Swal.fire(
    'Good job!',
    'Your order has been success!',
    'success'
  )
}).catch((err)=>{
   
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',

})
})


}
const deleteItem =(item)=>{
 
  let  temp = orders.filter((el)=>{
   if(el.id!==item.id)
   {
    return el
   }
   return null;

  }) 


  setOrders(temp)
  let newSum = totalCount - (item.price* item.amount) // toplam fiyattan silinnen urunun cikarilamasi

  setTotalCount(newSum)
  localStorage.setItem("cart",JSON.stringify(temp)) // localstorage den silme islemi
}
const renderHtml= orders.map((item,index)=>{
    return(
        <tr>
      <td>{item.name}</td>
      <td>{item.price} €</td>
      <td> X{item.amount}</td>
      <td>{item.price* item.amount} €</td>
      <td>
      <Button onClick={()=>{deleteItem(item)}} variant="danger">Delete</Button>
      </td>
    </tr>
    )
})
    return (
        <div>
           <Table striped bordered hover responsive>
  <thead>
    <tr>
   
      <th>Film name</th>
      <th>Unit Price</th>
      <th>Amount</th>
      <th>Total Price</th>
      <th></th>
     
    </tr>
  </thead>
  <tbody>
    {renderHtml}
  </tbody>
</Table>
    <span style={{fontSize:"20px",fontWeight:"bold"}}>Total Price: {totalCount}  €</span>
    <br/>
<Button onClick={checkOut} variant="outline-info" disabled={orders.length===0}>Check Out</Button> 
{/* buttonnu disable yapama */}
        </div>
    )
}
