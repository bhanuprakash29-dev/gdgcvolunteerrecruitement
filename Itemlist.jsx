import React from 'react';

function ItemList({ items, addToCart }) {
    return (
        <div>
            <h2 className="mb-4" style={{ fontWeight: 'bold', color: '#343a40', letterSpacing: '1px' }}>Items</h2>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-6 col-sm-4 col-md-3 mb-4">
                        <div 
                            className="card h-100 shadow-sm" 
                            style={{ borderRadius: '10px', overflow: 'hidden', transition: 'transform 0.2s' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="card-img-top" 
                                style={{ height: '200px', objectFit: 'cover', borderRadius: '5px 5px 0 0' }} 
                            />
                            <div className="card-body">
                                <h5 
                                    className="card-title" 
                                    style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '10px', color: '#495057' }}
                                >
                                    {item.title}
                                </h5>
                                <p className="card-text" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                                    {item.description.length > 60 ? `${item.description.slice(0, 60)}...` : item.description}
                                </p>
                                <h6 className="card-subtitle mb-2 text-muted" style={{ fontWeight: '600' }}>Price: ${item.price.toFixed(2)}</h6>
                                <button 
                                    onClick={() => addToCart(item)} 
                                    className="btn btn-primary w-100"
                                    style={{ backgroundColor: '#007bff', border: 'none', fontWeight: 'bold', padding: '10px 0' }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
