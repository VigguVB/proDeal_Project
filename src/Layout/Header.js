import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header(props) {

    const [keyword, setKeyWord] = useState("")

    const searchKeyword = (e) => {
        setKeyWord(e.target.value)
    }

    const searchHandler = () => {
        props.sendKeyword(keyword)
    }
    return (

        <div id="header_div">
            <h2 id="company">ProDeal</h2>
            <input onChange={searchKeyword} id="searchbox" placeholder='Search for Procuct Name or category' />
            <span onClick={searchHandler} className='glyphicon glyphicon-search icon'></span>
            <div id="nav">
                <Link to="/cart">
                    <button type="button" className="btn cart">
                        CART
                    </button>

                </Link>
                <Link to="/wishlist">
                    <button type="button" className="btn cart">
                        WISHLIST
                    </button>
                </Link>

                <Link to="/admin">
                    <button type="button" className="btn cart">
                        ADMIN
                    </button>
                </Link>

                <Link to="/">
                    <button type="button" className="btn cart">
                        HOME
                    </button>
                </Link>


            </div>
        </div>

    );
}

export default Header;