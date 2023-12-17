import React from "react";
import Card from './components/Card/Card';
import Header1 from './components/Header1';
import Drawer from './components/Drawer';



function App() {
    const[items, setItems] = React.useState([]);
    const[cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

   React.useEffect(() => {
       fetch('https://657f3ec66ae0629a3f5319ce.mockapi.io/items').then(res =>{
           return res.json();
       })
           .then((json) =>{
               setItems(json);
           });
   },[]);



    const onAddToCart =(obj) =>{
        setCartItems(prev =>[... prev,obj]);

    }

  return (
        <div className="wrapper clear">
            { cartOpened ? <Drawer items={cartItems} onClose={() =>setCartOpened(false)}/> : null}
            <Header1 onClickCart={() =>setCartOpened(true)}/>
            <div className="content p-40">
                  <div className="d-flex align-center justify-between mb-40">
                    <h1>Все шапки</h1>
                        <div className="search-block d-flex">
                          <img className="mt-20" width={20} height={20} src="/img/search.png" alt="Search"/>
                          <input placeholder="Поиск.." />
                        </div>
                  </div>
                  <div className="d-flex flex-wrap">
                       {items.map((item) => (
                           <Card
                               title={item.title}
                               price={item.price}
                               imageUrl={item.imageUrl}
                               onFavorite={() => console.log('Добавили в закладки')}
                               onPlus={(obj) => onAddToCart(obj)}
                           />

                       ))}
                  </div>
            </div>
        </div>
  );
}

export default App;
