import React, { useEffect, useState } from 'react';
import './cartdetails.css';

let cart = []

function CartDetails(props) {

    const[removeElement, setRemoveElement] = useState({isActive:true, itemId:""})

    const removeItem = (id) =>{
        let result = cart[0].find(item=>item.item_id==id)

        if(result.count_of_items>1){
            result.count_of_items = result.count_of_items - 1;
            localStorage.setItem("cart", JSON.stringify(cart[0]))
        }else{
            let index = cart[0].findIndex(item=>item.item_id==id);
            cart[0].splice(index,1);
            localStorage.setItem("cart", JSON.stringify(cart[0]))
        }
        let randomNumber = Math.random()
        props.recieveNumber(randomNumber)
    }

    const renderCart = ({sendCart})=>{
        if(sendCart){
            cart.push(sendCart[0])
            return sendCart[0].map((item)=>{
                return(
                    <table key={Math.random()}  class="table table-striped">
                        <tbody>
                            <tr>
                                <td><img className='img' src={item.product_image} /></td>
                                <td>{item.item_id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.category}</td>
                                <td>{item.count_of_items}</td>
                                <td>{item.total_price}</td>
                                <td><span onClick={()=>removeItem(item.item_id)} className='glyphicon glyphicon-trash trash'></span></td>
                            </tr>
                        </tbody>    
                    </table>
                )
            })
        }
    }
    return (
        <div>
            {renderCart(props)}
        </div>
    );
}

export default CartDetails;