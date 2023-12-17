function Header1(props){
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="" />
            <div>
                <h3 className="text-uppercase">React Shapki</h3>
                <p className="opacity-5">Магазин крутых шапок</p>
            </div>
            </div>
            <ul className="d-flex cu-p">
            <li onClick={props.onClickCart} className="mr-30">
                <img width={20} height={20} src="/img/cart.png" alt="" />
                <span className="ml-30">4500kzt</span>
            </li>
            <li>
                <img width={20} height={20} src="/img/user.png" alt="" />
            </li>
            </ul>
        </header>
    );
}

export default Header1;