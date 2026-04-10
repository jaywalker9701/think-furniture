import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px', fontWeight: 700 }}>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2 style={{ color: '#888', marginBottom: '20px' }}>Your cart is empty.</h2>
          <Link to="/" style={{ padding: '15px 30px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase' }}>Continue Shopping</Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '50px' }}>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.productId} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '30px', marginBottom: '30px' }}>
                <Link to={`/`} style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Link>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', color: '#666', marginBottom: '15px' }}>{item.priceExcStr}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ display: 'flex', border: '1px solid #ddd', width: '100px', height: '35px', overflow: 'hidden' }}>
                      <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} style={{ flex: 1, border: 'none', backgroundColor: '#eaeaea', color: '#000', cursor: 'pointer', fontSize: '20px', fontWeight: 700, padding: 0 }}>-</button>
                      <input type="text" value={item.quantity} readOnly style={{ width: '40px', textAlign: 'center', border: 'none', backgroundColor: '#fff', color: '#000', fontSize: '15px', fontWeight: 600, padding: 0 }} />
                      <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} style={{ flex: 1, border: 'none', backgroundColor: '#eaeaea', color: '#000', cursor: 'pointer', fontSize: '20px', fontWeight: 700, padding: 0 }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.productId)} style={{ background: 'none', border: 'none', color: '#d93025', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px' }}>Remove</button>
                  </div>
                </div>
                <div style={{ fontWeight: 700, fontSize: '18px' }}>
                  £{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary" style={{ backgroundColor: '#f9f9f9', padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '25px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#555' }}>
              <span>Items ({itemCount})</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', color: '#555' }}>
              <span>Tax (20% Est.)</span>
              <span>£{(cartTotal * 0.2).toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontWeight: 700, fontSize: '22px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              <span>Total</span>
              <span>£{(cartTotal * 1.2).toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              style={{ width: '100%', padding: '18px', backgroundColor: '#f17e16', color: 'white', border: 'none', fontSize: '16px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#d66d0f')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f17e16')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
