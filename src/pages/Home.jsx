import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "../components/Card/Card";
import AppContext from "../context";
import React from "react";

function Home({items, setSearchValue, onAddToFavorite, searchValue, onAddToCart, onChangeSearchInput, isLoading}){


    const renderItems = () =>{
        const filteredItems = items && items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (
            isLoading
            ? [...Array(10)]: filteredItems).map((item, index) => (
                <Card
                    key={index}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                    {...item}
             />
        ));
    };

    return(<div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все шапки'}</h1>
            <div className="search-block d-flex">
                {/*<img className="mt-20" width={20} height={20} src="/img/search.png" alt="Search"/>*/}
                {searchValue && <img onClick={()=> setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
                <input onChange={onChangeSearchInput} value={searchValue}  placeholder="Поиск.." />
            </div>
        </div>
        <div className="d-flex flex-wrap">
            {renderItems()}
        </div>
    </div>
    )
}

export default Home;