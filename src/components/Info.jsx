import React from "react";
import AppContext from "../context";

const Info = ({title,image,description}) =>{

    const {setCartOpened} = React.useContext(AppContext);

    return(
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
                className="mb-20"
                width="400px"
                height="250px"
                src={image}
                alt="EmptyCart"
            />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpened(false)} className="greenButton cu-p">
                Back
            </button>
        </div>

    )
}
export default Info;