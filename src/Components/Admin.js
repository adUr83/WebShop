import React,{useState ,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'


export default function Admin() {
const [admin, setAdmin] = useState([])

useEffect(() => {
   axios.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders').then((res)=>{
       const orders= res.data
       console.log(orders);

    let fltOrder= orders.filter((item)=>{
        if (item.createdBy==="Adem Ure") {
            return item
         
        }
       
        
     })
     setAdmin(fltOrder)
     console.log(fltOrder);
   })




}, [])

const deleteFromAdmin=(item)=>{
axios.delete(`https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${item.id}`).then((res)=>{
    let deleteFlt = admin.filter((el)=>{
       if (item.id !== el.id){
           return el
       }
    })
    setAdmin(deleteFlt)
    Swal.fire(
        'Good job!',
        'Your order has been deleted!',
        'success'
      )
   
}).catch(()=>{Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  
  })})
}

let renderHtml = admin.map((item,index)=>{
    return(
        <tr>
            <td> {moment(item.created).format('MMMM Do YYYY, h:mm:ss a')}</td>
            <td> {item.createdBy}</td>
            <td> {item.paymentMethod}</td>
            <td> {item.totalPrice}  €</td>
            <td>
            <Button onClick={()=>deleteFromAdmin(item)} variant="danger">Delete</Button> 
            </td>
       
        </tr>
    )
})

    return (
        <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
     
              
                <th >Created Time</th>
                <th >Created By</th>
                <th>Payment Method</th>
                <th >Total Price</th>
                <th >Action</th>
          
          </tr>
       

        </thead>
        <tbody>
          
            {/* <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td> */}
            {renderHtml}
         
        </tbody>
      </Table>
    )
}
