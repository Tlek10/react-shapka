import Card from "../components/Card/Card";
import AppContext from "../context";
import React from "react";

function Favorites({ onAddToFavorite }) {
    const { favorites } = React.useContext(AppContext);

    console.log('Favorites:', favorites);


    if (!favorites) {
        return null;
    }

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>My favourites</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={() => onAddToFavorite(item)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
