import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a SYC, tu tienda de ropa favorita" />
        </>
    );
};

export default App;
