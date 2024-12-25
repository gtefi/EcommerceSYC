import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget d-flex align-items-center">
            <i className="fas fa-shopping-cart" style={{ fontSize: '1.5rem', color: '#333' }}></i>
            <span className="badge bg-danger ms-2">3</span>
        </div>
    );
};

export default CartWidget;
