import React, { useState } from 'react';
import './AddProducts.css';
import { useNavigate } from 'react-router-dom'
import Header from '../Layout/Header';

let addedItems = []

function AddProducts(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState("");

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
    }


    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const priceHandler = (e) => {
        setPrice(e.target.value)
    }

    const categoryHandler = (e) => {
        setCategory(e.target.value)
    }

    const ratingsHandler = (e) => {
        setRatings(e.target.value)
    }

    const addItemsHandler = () => {

        let itemObj = {
            id: Math.random().toFixed(4),
            product_name: name,
            product_image: image,
            product_description: description,
            product_price: price,
            product_category: category,
            product_ratings: ratings
        }
        addedItems.push(itemObj);


        setName("");
        setImage("")
        setDescription("")
        setPrice("")
        setCategory("")
        setRatings("")
    }

    const submit = () => {
        localStorage.setItem("addItems", JSON.stringify(addedItems))
        navigate('/')
    }
    return (
        <>
            <Header />
            <div className='container mt-3'>
                <h1 style={{ textAlign: "center", textDecoration: "underline", color: "#599bdd" }}>Add Items Form</h1>
                <form onSubmit={submitHandler}>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='name'>Product Name :</label>
                        </div>
                        <div className='element_input'>
                            <input type="text" id="name" value={name} onChange={nameHandler} />
                        </div>
                    </div>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='image'>Product Image URL  :</label>
                        </div>
                        <div className='element_input'>
                            <input type="text" id="image" value={image} onChange={imageHandler} />
                        </div>
                    </div>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='description'>Product Description :</label>
                        </div>
                        <div className='element_input'>
                            <input type="text" id="description" value={description} onChange={descriptionHandler} />
                        </div>
                    </div>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='price'>Product Price :</label>
                        </div>
                        <div className='element_input'>
                            <input type="number" id="price" value={price} onChange={priceHandler} />
                        </div>
                    </div>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='price'>Product Category :</label>
                        </div>
                        <div className='element_input'>
                            <select type="number" id="price" value={category} onChange={categoryHandler}>
                                <option>Select One</option>
                                <option>Grocery</option>
                                <option>Medicine</option>
                                <option>Fashions</option>
                                <option>Mobiles</option>
                                <option>Furniture</option>
                                <option>Home Appliances</option>
                            </select>
                        </div>
                    </div>
                    <div className='element_main'>
                        <div className='element_label'>
                            <label htmlFor='ratings'>Product Ratings :</label>
                        </div>
                        <div className='element_input'>
                            <input type="number" id="ratings" value={ratings} onChange={ratingsHandler} />
                        </div>
                    </div>
                    <div>
                        <button onClick={addItemsHandler} id="add">ADD ITEM</button>

                        <button onClick={submit} id="add">SUBMIT</button>

                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProducts;