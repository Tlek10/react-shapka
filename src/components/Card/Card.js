import cardStyles from './Card.module.scss'

function Card(props){
    console.log(props);

    return(
        <div className={cardStyles.card}>
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked" /> 
            </div> 
                <img width={133} height={112} src={props.imageUrl} alt="shapki" />
                <h5>{props.title}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{props.price} kzt</b>
                    </div>
                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src="/img/plus333.png" alt="Plus" />
                </button>
            </div>
        </div>
     );
}

export default Card;