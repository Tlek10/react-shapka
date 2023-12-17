import React from "react";
import cardStyles from './Card.module.scss'


function Card({title, imageUrl, price, onPlus, onFavorite}){
    const [isAdded,setIsAdded] = React.useState(false);

    const onClickPlus = () =>{
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    return(
        <div className={cardStyles.card}>
            <div className="favorite">
                <div className={cardStyles.favorite}onClick={onFavorite} >
                    <img src="/img/unliked.svg" alt="Unliked" />
                </div>
                    <img width={133} height={112} src={imageUrl} alt="shapki" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} kzt</b>
                        </div>
                        <img className={cardStyles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
                    </div>
            </div>
        </div>
    );
}

export default Card;