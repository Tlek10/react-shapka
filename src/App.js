function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React Shapki</h3>
            <p className="opacity-5">Магазин крутых шапок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/cart.png" alt="" />
            <span className="ml-30">4500kzt</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.png" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все шапки</h1>

            <div className="d-flex">
            <div className="card">
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
        <div className="card ">
          <img width={133} height={112} src="/img/shapki/2.jpg" alt="shapki" />
          <h5>Men's Vans® Logo Cuff Foldover Beanie</h5>
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
        <div className="card">
          <img width={133} height={112} src="/img/shapki/3.jpg" alt="shapki" />
          <h5>Men's Dockers® Sherpa Lined Rib Knit Cuff Beanie</h5>
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
        <div className="card">
          <img width={133} height={112} src="/img/shapki/4.jpg" alt="shapki" />
          <h5>Men's Tek Gear® Knit Beanie</h5>
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
            </div>

      </div>
    </div>
  );
}

export default App;
