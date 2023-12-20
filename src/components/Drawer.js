import Info from "./Info";
import React from "react";
import AppContext from "../context";
import Card from "./Card/Card";

function Drawer({ onClose, onRemove, items = [] }) {
    const {cartItems}  = React.useContext(AppContext);
    const {setCartOpened} = React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const totalPrice = cartItems.reduce((sum, obj )=>obj.price + sum,0)


    const onClickOrder = ()=>{
        setIsOrderComplete(true);
        setCartOpened([]);
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img
                        onClick={onClose}
                        className="cu-p"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20" key={obj.id}>
                                    <div
                                        style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                        className="cartItemImg">
                                    </div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} kzt</b>
                                    </div>

                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn cu-p"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Total:</span>
                                    <div></div>
                                    <b>{totalPrice} kzt</b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className="greenButton">Place order</button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? "Order Placed" : "Empty Cart"}
                        description={isOrderComplete ? "Your order has been placed successfully" : "Add items to your cart"}
                        image={ isOrderComplete ? "/img/complete-icon.png" : "/img/empty-cart1.png"}/>

                )}
            </div>
        </div>
    );
}

export default Drawer;
