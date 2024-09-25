import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
    return (
        <div className="cart p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontWeight: 'bold', color: '#343a40' }}>Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-muted">Your cart is empty</p>
            ) : (
                <div className="list-group">
                    {cart.map(cartItem => (
                        <div 
                            key={cartItem.id} 
                            className="list-group-item d-flex justify-content-between align-items-center mb-2" 
                            style={{ borderRadius: '10px', backgroundColor: '#fff', padding: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="d-flex align-items-center">
                                <img 
                                    src={cartItem.image} 
                                    alt={cartItem.title} 
                                    className="cart-image me-3" 
                                    style={{ height: '60px', width: '60px', objectFit: 'cover', borderRadius: '5px' }} 
                                />
                                <div>
                                    <h5 className="mb-1" style={{ fontWeight: '500', fontSize: '1.1rem' }}>{cartItem.title}</h5>
                                    <p className="mb-0 text-muted">Price: <strong>${cartItem.price}</strong></p>
                                    <p className="mb-0 text-muted">Quantity: {cartItem.quantity}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button 
                                    onClick={() => increaseQuantity(cartItem.id)} 
                                    className="btn btn-sm btn-outline-primary me-2" 
                                    style={{ fontWeight: 'bold' }}
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => decreaseQuantity(cartItem.id)} 
                                    className="btn btn-sm btn-outline-secondary me-2" 
                                    style={{ fontWeight: 'bold' }}
                                >
                                    -
                                </button>
                                <button 
                                    onClick={() => removeFromCart(cartItem.id)} 
                                    className="btn btn-sm btn-danger"
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
