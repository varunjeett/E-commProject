import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    };

    return <nav className="header">

        {/*logo on the left -> img */}
        <Link to="/">
            <img
                className="header__logo highlight"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo of amazon"
            />
        </Link>

        {/* Search Box*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 Links*/}
        <div className="header_Right_nav">

            {/* 1st link  of SIGNIN*/}
            <Link to={!user && "/login"} className="header__link highlight">
                <div onClick={login} className="header__option">
                    <span className="header__optionLine1">Hello {user?.email} </span>
                    <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            {/* 2nd link of UR ORDERS */}
            <Link to="/orders" className="header__link highlight">
                <div className="header__option">
                    <span className="header__optionLine1">Returns</span>
                    <span className="header__optionLine2">& Orders</span>
                </div>
            </Link>


            {/* 3rd link of UR PRIME */}

            <Link to="/prime" className="header__link highlight">
                <div className="header__option">
                    <span className="header__optionLine1">Your</span>
                    <span className="header__optionLine2">Prime</span>
                </div>
            </Link>

            {/* Basket icon with number*/}

            <Link to="/checkout" className="header__link highlight">

                <div className="header__optionBasket">

                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon />

                    {/* Number of items in the basket  */}
                    <span className="header__optionLine2 header__BasketCount">{basket.length}</span>
                </div>
            </Link>

        </div>

    </nav>
}

export default Header

