import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import ProductDisplay from './ProductDisplay';
import './prolist.css'


function ProductList(props) {

    const [productData, setProductData] = useState([])
    const [random, setrandom] = useState("");
    const [firstfilterActive, setFirstFilterActive] = useState(false)
    const [secondfilterActive, setSecondFilterActive] = useState(false)
    const [thirdfilterActive, setThirdFilterActive] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem("addItems");
        let parsedData = JSON.parse(data)
        setProductData(parsedData)


    }, [])
 // Sorting price Low to High
    const sortAscendingHandler = ()=>{
        let newData = productData.sort((a,b)=>{
            return a.product_price - b.product_price
        })
        setFirstFilterActive(true)
        setSecondFilterActive(false)
        setThirdFilterActive(false)
        setProductData(newData)
        setrandom(Math.random())
    }
 // Sorting price High to Low
    const sortDecendingHandler = ()=>{
        let newData = productData.sort((a,b)=>{
            return b.product_price - a.product_price
        })
        setSecondFilterActive(true)
        setFirstFilterActive(false)
        setThirdFilterActive(false)
        setProductData(newData)
        setrandom(Math.random())
  
    }
 // Sorting by Ratings

 const sortByRatingsHandler = ()=>{
    let newData = productData.sort((a,b)=>{
        return b.product_ratings - a.product_ratings
    })
    setThirdFilterActive(true)
    setFirstFilterActive(false)
    setSecondFilterActive(false)
    setProductData(newData)
    setrandom(Math.random())
}

 // Search engine logic

 const searchHandler = (keyword) =>{
    let output = productData.filter((item)=>{
        return ( 
            item.product_name.toLowerCase().indexOf(keyword.toLowerCase())>-1 ||
            item.product_category.toLowerCase().indexOf(keyword.toLowerCase())>-1
        
        )
    })
    setProductData(output)
 }
    return (
        <>
            <Header sendKeyword={(keyword)=>searchHandler(keyword)} />
            <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li className={firstfilterActive===true?'activelink':""} onClick={sortAscendingHandler}>
                        Price - LOW to HIGH  
                        </li>
                        <li className={secondfilterActive===true?'activelink':""}  onClick={sortDecendingHandler}>
                        Price - HIGH to LOW  
                        </li>
                        <li  className={thirdfilterActive===true?'activelink':""}  onClick={sortByRatingsHandler}>
                        Sort By Ratings  
                        </li>

                        {/* <li class="nav-item">
                            Price - LOW to HIGH
                        </li>
                        <li class="nav-item">
                            Price - HIGH to LOW
                        </li>
                        <li class="nav-item">
                            Sort By Ratings
                        </li> */}
                    </ul>
                </div>
            </nav>
            <div>
                <ProductDisplay senddata={productData} />
            </div>
        </>

    );
}

export default ProductList;