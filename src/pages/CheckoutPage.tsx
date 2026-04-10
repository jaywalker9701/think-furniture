import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const CheckoutPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    // In a real app we'd send to backend here
  };

  if (isSuccess) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '36px', color: '#2ecc71', marginBottom: '20px' }}>Order Placed Successfully!</h1>
        <p style={{ fontSize: '18px', color: '#555', marginBottom: '40px' }}>Thank you for your purchase. Your imaginary order has been received.</p>
        <button onClick={() => navigate('/')} style={{ padding: '15px 30px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600, textTransform: 'uppercase' }}>Return to Shop</button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
        <h2>No items to checkout</h2>
        <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '15px 30px', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>Return to Shop</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '40px', fontWeight: 700 }}>Checkout</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '60px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>Shipping Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <input required type="text" placeholder="First Name" defaultValue={user?.name.split(' ')[0] || ''} style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
              <input required type="text" placeholder="Last Name" defaultValue={user?.name.split(' ')[1] || ''} style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
            </div>
            <input required type="email" placeholder="Email Address" defaultValue={user?.email || ''} style={{ width: '100%', padding: '15px', border: '1px solid #ccc', marginBottom: '20px' }} />
            <input required type="text" placeholder="Street Address" style={{ width: '100%', padding: '15px', border: '1px solid #ccc', marginBottom: '20px' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input required type="text" placeholder="City" style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
              <input required type="text" placeholder="Postal Code" style={{ width: '100%', padding: '15px', border: '1px solid #ccc' }} />
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '20px' }}>Payment Method</h2>
            <div style={{ padding: '20px', border: '1px solid #ccc', backgroundColor: '#f9f9f9', marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input type="radio" name="payment" defaultChecked />
                <span>Credit / Debit Card (Fake simulation)</span>
              </label>
            </div>
          </div>

          <button type="submit" style={{ width: '100%', padding: '20px', backgroundColor: '#f17e16', color: '#fff', border: 'none', fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', cursor: 'pointer' }}>
            Place Order
          </button>
        </form>

        <div style={{ backgroundColor: '#f9f9f9', padding: '30px', height: 'fit-content' }}>
           <h3 style={{ fontSize: '20px', marginBottom: '25px', borderBottom: '2px solid #000', paddingBottom: '10px' }}>Your Order</h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px', maxHeight: '300px', overflowY: 'auto' }}>
             {cart.map(item => (
               <div key={item.productId} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '14px' }}>
                 <div style={{ display: 'flex', gap: '10px' }}>
                   <img src={item.image} style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt="thumb" />
                   <span>{item.quantity} x {item.title}</span>
                 </div>
                 <span style={{ fontWeight: 600 }}>£{(item.price * item.quantity).toFixed(2)}</span>
               </div>
             ))}
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#555' }}>
              <span>Subtotal</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', color: '#555' }}>
              <span>Tax (20%)</span>
              <span>£{(cartTotal * 0.2).toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '22px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
              <span>Total</span>
              <span>£{(cartTotal * 1.2).toFixed(2)}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
