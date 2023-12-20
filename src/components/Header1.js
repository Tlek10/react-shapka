import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import AppContext from "../context";
function Header1(props) {

    const {cartItems}  = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj )=>obj.price + sum,0)

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                       <img width={40} height={40} src="/img/logo1.jpg" alt="logo" />
                       <div>
                           <h3 className="text-uppercase">Beanie MVB</h3>
                           <p className="opacity-5">Men's beanie store</p>
                       </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
                </li>
                <li className="mr-30 cu-p">
                    <Link to="/favorites" >
                        <img width={20} height={20} src="/img/heart.svg" alt="Favorites" />
                    </Link>
                </li>
                <li className="mr-30">
                    <img width={20} height={20} src="/img/user.svg" alt="Profile" />
                </li>
            </ul>
        </header>
    );
}

export default Header1;
