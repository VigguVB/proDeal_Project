import React, { useState } from 'react';
import './product.css';

let cart = [];
let wishlist = [];

function ProductDisplay(props) {

    const [addedToWish, setAddedToWish] = useState({ isSelected: false, id: "" })
    const [wishlistError, setWishlistError] = useState(false)

    // add to wishlist logic
    
    const addToWishList = (id, name, image, description, price, category, ratings) => {

        setAddedToWish({ isSelected: true, id: id })
        if (wishlist.length === 0 && cart.indexOf(id) === -1) {
            wishlist.push({
                item_id: id,
                product_name: name,
                product_image: image,
                product_description: description,
                category: category,
                product_ratings: ratings,
            })
        } else {

            let result = wishlist.find(item => item.item_id === id)
            if (result) {
                setWishlistError(true)
                setTimeout(() => {
                    setWishlistError(false)
                }, 2000)
            } else {
                wishlist.push({
                    item_id: id,
                    product_name: name,
                    product_image: image,
                    product_description: description,
                    category: category,
                    product_ratings: ratings,
                })
            }
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist))

    }
// Add to cart Logic
    const addToCart = (id, name, image, description, price, category, ratings) => {

        if (cart.length === 0 && cart.indexOf(id) === -1) {
            cart.push({
                item_id: id,
                product_name: name,
                product_image: image,
                product_description: description,
                total_price: price,
                category: category,
                product_ratings: ratings,
                count_of_items: 1
            })
        }
        else {

            let result = cart.find(item => item.item_id === id)
            if (result) {
                result.count_of_items++;
                result.total_price = Number(result.total_price) + Number(price)
            } else {
                cart.push({
                    item_id: id,
                    product_name: name,
                    product_image: image,
                    product_description: description,
                    total_price: price,
                    category: category,
                    product_ratings: ratings,
                    count_of_items: 1
                })
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart))

    }

    const renderProducts = ({ senddata }) => {
        if (senddata) {
            console.log(senddata)
            return senddata.map((item) => {
                return (
                    <div key={item.id} className="col">
                        <div className="card">
                            <img src={item.product_image} className="card-img-top" />
                            <div style={{ textAlign: "center" }} className="card-body">
                                <h2 className="card-title">{item.product_name}</h2>
                                <p className="card-text">{item.product_description}</p>
                                <h3 className="card-text"><strong>Rs. {item.product_price}</strong></h3>
                                <p className="card-text">Category: {item.product_category}</p>
                                <p className="card-text">Ratings: {item.product_ratings}</p>
                            </div>
                            <div>
                                <span id={item.id} onClick={() => addToWishList(item.id, item.product_name, item.product_image, item.product_description, item.product_price, item.product_category, item.product_ratings)} className={addedToWish.isSelected === true && addedToWish.id === item.id ? "glyphicon glyphicon-heart addedToWish" : "glyphicon glyphicon-heart-empty heart"}></span>
                                <span className='glyphicon glyphicon-edit heart'></span>
                                <span className='glyphicon glyphicon-trash trash'></span>
                                <button onClick={() => addToCart(item.id, item.product_name, item.product_image, item.product_description, item.product_price, item.product_category, item.product_ratings)} id='addTOCart'>ADD TO CART</button>
                            </div>

                        </div>
                    </div>)
            })
        }
    }
    return (
        <>
            <div id="messagediv">
                {wishlistError && <div id="message">
                    This Item has already been added to the Wishlist
                </div>}
            </div>
            <div className='container-fluid'>
                {renderProducts(props)}
            </div>
        </>
    );
}

export default ProductDisplay;