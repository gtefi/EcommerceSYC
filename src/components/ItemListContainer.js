import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container text-center py-4">
            <h1>{greeting}</h1>
            <p>Descubre los mejores productos con calidad garantizada.</p>
        </div>
    );
};

export default ItemListContainer;
