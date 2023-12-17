function Drawer({onClose, items = []}){
    return( 
    <div className="overlay">
        <div className="drawer">
                <h2 className=" d-flex justify-between  mb-30" >Корзина                
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                className="cartItemImg">
                            </div>

                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} kzt</b>
                            </div>
                         <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>11 980 kzt</b>
                            </li>
                            <li>
                                <span>Доставка:</span>
                                <div></div>
                                <b>990 kzt</b>
                            </li>
                        </ul>
                            <button className="greenButton">Оформить заказ</button>
                    </div>
            </div>
        </div>    
    </div>
  );
}

export default Drawer;