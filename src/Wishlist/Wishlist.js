import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import WishDetails from './WishDetails';

function Wishlist(props) {

    const [data, setdata] = useState("")

    useEffect(() => {
        let wishdata = localStorage.getItem("wishlist")
        setdata(JSON.parse(wishdata))
    }, [])
    return (
        <>
            <Header />
            <div>
                <h1 style={{ textAlign: "center", color: "#599bdd", textDecoration: "underline" }}>MY WISHLIST</h1>
                <div className='container'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product category</th>
                            </tr>
                        </thead>
                    </table>
                    <WishDetails sendwish={data} />
                </div>
            </div>
        </>
    );
}

export default Wishlist;