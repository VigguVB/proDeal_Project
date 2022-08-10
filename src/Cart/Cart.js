import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import CartDetails from './CartDetails';
import './cartdetails.css'

function Cart(props) {

    const [cartItems, setCartItems] = useState();
    const [number, setNumber] = useState("")

    useEffect(() => {
        let cartdata = localStorage.getItem("cart")
        setCartItems([JSON.parse(cartdata)])

    }, [number])

    const recieveNumberHandler = (number) => {
        setNumber(number)
    }
    return (
        <>
            <Header />
            <div>
                <h1 style={{ textAlign: "center", color: "#599bdd", textDecoration: "underline" }}>CART</h1>
                <div className='container'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product category</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                    </table>
                    <CartDetails recieveNumber={(number) => recieveNumberHandler(number)} sendCart={cartItems} />
                </div>
            </div>
        </>
    )
}

export default Cart;