import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header1 from './components/Header1';
import Drawer from './components/Drawer';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";


function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(  () => {
    async function fetchData(){

        const itemResponse = await axios.get('https://657f3ec66ae0629a3f5319ce.mockapi.io/items');
        const cartResponse = await axios.get('https://657f3ec66ae0629a3f5319ce.mockapi.io/cart');
        const favoriteResponse = await axios.get('https://658071ae6ae0629a3f553a74.mockapi.io/favorites');

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoriteResponse.data);
        setItems(itemResponse.data);

    }
    fetchData();

       }, []);

    const onAddToCart =(obj) =>{
        if(cartItems.find(favObj => Number(favObj.id) === Number(obj.id))) {
            axios.delete(`https://657f3ec66ae0629a3f5319ce.mockapi.io/cart/${obj.id}`);
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
            axios.post('https://657f3ec66ae0629a3f5319ce.mockapi.io/cart', obj);
            setCartItems((prev) =>[... prev,obj]);

        }
    };
    const onRemoveItem = (id) =>{
        axios.delete(`https://657f3ec66ae0629a3f5319ce.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));

    };
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                await axios.delete(
                    `https://658071ae6ae0629a3f553a74.mockapi.io/favorites/${obj.id}`
                );
                setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const { data } = await axios.post(
                    'https://658071ae6ae0629a3f553a74.mockapi.io/favorites',
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Error adding to fav');
        }
    };


    const onChangeSearchInput = (event) =>{
        setSearchValue(event.target.value);
    };

    const isItemAdded =(id)=>{
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
       <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, setCartOpened}}>
           <div className="wrapper clear">
               {cartOpened && (<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />)}

               <Header1 onClickCart={() => setCartOpened(true)} />

               <Routes>
                   <Route
                       path="/"
                       element={
                           <Home
                               items={items}
                               cartItems={cartItems}
                               searchValue={searchValue}
                               setSearchValue={setSearchValue}
                               onChangeSearchInput={onChangeSearchInput}
                               onAddToFavorite={onAddToFavorite}
                               onAddToCart={onAddToCart}
                               isLoading={!items.length}
                           />
                       }
                       exact
                   />
                   <Route
                       path="/favorites"
                       element={<Favorites onAddToFavorite={onAddToFavorite} />}
                   />
               </Routes>

           </div>
       </AppContext.Provider>

    );
}

export default App;