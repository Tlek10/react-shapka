function Card(){
    return(
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked" /> 
            </div> 
                <img width={133} height={112} src="/img/shapki/1.jpg" alt="shapki" />
                <h5>Men's Vans®  Graphic Cuffed Beanie</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>5990 kzt</b>
                    </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus333.png" alt="Plus" />
                </button>
            </div>
        </div>
  );
}

export default Card;