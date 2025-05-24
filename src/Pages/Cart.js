import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Coupon and notes state
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [cartNote, setCartNote] = useState('');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const deliveryCharge = cartItems.length > 0 ? 30 : 0;
    const total = subtotal + tax + deliveryCharge - discount;
    setTotalAmount(total);
  }, [cartItems, discount]);

  const handleApplyCoupon = () => {
    let applied = false;
    let disc = 0;
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if (coupon.trim().toUpperCase() === 'SAVE20' && subtotal > 0) {
      disc = Math.round(subtotal * 0.2);
      applied = true;
    } else {
      disc = 0;
      applied = false;
    }
    setDiscount(disc);
    setCouponApplied(applied);
  };

  const checkout = () => {
    if (!user) {
      alert('Please log in to checkout.');
      return;
    }
    navigate('/checkout');
  };

  return (
    <Container fluid className="order-container" style={{ minHeight: '100vh', padding: '2rem 0', paddingTop: '90px' }}>
      <Row className="justify-content-center">
        <Col lg={6} md={12} style={{
          marginTop: '2rem',
          width: '100%',
          maxWidth: '720px',
          background: '#ffffff',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 24px rgba(13, 72, 136, 0.12)',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#232323'
        }}>
          <h2 style={{
            fontWeight: 800,
            fontSize: '2.4rem',
            color: '#0d4888',
            marginBottom: '2rem',
            letterSpacing: '1px',
            textAlign: 'center'
          }}>Cart</h2>
          <textarea
            placeholder="Add a note for your order (e.g. no onions, extra cheese)..."
            value={cartNote}
            onChange={e => setCartNote(e.target.value)}
            rows={2}
            maxLength={120}
            style={{
              width: '100%',
              borderRadius: '1rem',
              border: '1px solid #e0e7ff',
              padding: '0.7rem 1rem',
              marginBottom: '1rem',
              fontSize: '1rem',
              background: '#f8fafc',
              resize: 'vertical'
            }}
          />
          <ul style={{
            width: '100%',
            padding: 0,
            listStyle: 'none',
            marginBottom: '1.2rem'
          }}>
            {cartItems.length === 0 ? (
              <li style={{
                color: '#888',
                textAlign: 'center',
                fontSize: '1.1rem'
              }}>Your cart is empty.</li>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} style={{
                  background: '#f8fafc',
                  borderRadius: '1rem',
                  marginBottom: '0.7rem',
                  padding: '0.7rem 1rem',
                  color: '#232323',
                  fontWeight: 500,
                  fontSize: '1rem',
                  boxShadow: '0 1px 4px rgba(13,72,136,0.04)',
                  position: 'relative'
                }}>
                  {index + 1}. {item.name} <br />
                  <span>Size: {item.size}</span> | <span>Crust: {item.crust}</span> <br />
                  <span>Toppings: {item.toppings && item.toppings.length > 0 ? item.toppings.join(', ') : 'None'}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontWeight: '700', marginRight: '0.5rem' }}>Qty:</span>
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#0d4888',
                        border: 'none',
                        color: 'white',
                        fontWeight: 'bold',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '26px',
                        lineHeight: 1,
                        boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                        userSelect: 'none'
                      }}
                      onClick={() => {
                        if (item.quantity > 1) decrementQuantity(item.name);
                      }}
                      title="Decrease quantity"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >−</button>
                    <span style={{ padding: '0 0.5rem' }}>{item.quantity}</span>
                    <button
                      type="button"
                      style={{
                        backgroundColor: '#0d4888',
                        border: 'none',
                        color: 'white',
                        fontWeight: 'bold',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '26px',
                        lineHeight: 1,
                        boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
                        userSelect: 'none'
                      }}
                      onClick={() => incrementQuantity(item.name)}
                      title="Increase quantity"
                      aria-label={`Increase quantity of ${item.name}`}
                    >+</button>
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#555' }}>Price: Rs.{item.price}</span> <br />
                  <span style={{ fontWeight: 600, color: '#dd2476' }}>Amount: Rs.{item.price * item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#dd2476',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      float: 'right',
                      fontSize: '1.2rem',
                      lineHeight: '1rem',
                      userSelect: 'none'
                    }}
                    title="Remove item"
                  >&times;</button>
                </li>
              ))
            )}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem', color: '#232323', fontWeight: 500 }}>
            <div>Total items: <span style={{ float: 'right' }}>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span></div>
            <div>Subtotal: <span style={{ float: 'right' }}>Rs.{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span></div>
            <div>Tax (5%): <span style={{ float: 'right' }}>Rs.{(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.05).toFixed(2)}</span></div>
            <div>Delivery charge: <span style={{ float: 'right' }}>Rs.{cartItems.length > 0 ? 30 : 0}</span></div>
            <div style={{ fontWeight: 700, color: '#0d4888', marginTop: '0.5rem' }}>Final amount payable: <span style={{ float: 'right', color: '#ff512f' }}>Rs.{totalAmount.toFixed(2)}</span></div>
          </div>
          <div style={{ marginBottom: '1rem', fontWeight: 600, color: '#0d4888' }}>
            Estimated Delivery: 30 Minutes
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Promo code (SAVE20)"
              value={coupon}
              onChange={e => { setCoupon(e.target.value); setCouponApplied(false); setDiscount(0); }}
              disabled={couponApplied}
              style={{
                flex: 1,
                borderRadius: '1rem',
                border: '1px solid #cbd5e1',
                padding: '0.7rem 1rem',
                fontSize: '1.1rem',
                background: '#f8fafc',
                transition: 'border-color 0.3s ease'
              }}
            />
            <button
              onClick={handleApplyCoupon}
              disabled={couponApplied || !coupon}
              style={{
                background: couponApplied ? '#ccc' : 'black',
                color: '#fff',
                border: 'none',
                borderRadius: '1rem',
                fontWeight: '700',
                padding: '0.7rem 1.8rem',
                fontSize: '1.1rem',
                cursor: couponApplied ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s ease'
              }}
            >
              {couponApplied ? "Applied" : "Apply"}
            </button>
          </div>
          {couponApplied && (
            <div style={{ color: '#0d4888', fontWeight: 600, marginBottom: '0.5rem', width: '100%' }}>
              Promo code applied! Discount: Rs.{discount}
            </div>
          )}
          <button
            onClick={() => setShowClearConfirm(true)}
            disabled={cartItems.length === 0}
            style={{
              background: cartItems.length === 0 ? '#ccc' : '#fff',
              color: cartItems.length === 0 ? '#666' : '#ff512f',
              border: '1px solid #ff512f',
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '0.5rem 1.5rem',
              fontSize: '1rem',
              marginBottom: '1rem',
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >Clear Cart</button>
          {showClearConfirm && (
            <div style={{
              background: '#fffbe6',
              border: '1px solid #ff512f',
              borderRadius: '1rem',
              padding: '1rem',
              marginBottom: '1rem',
              width: '100%',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '0.7rem', color: '#0d4888', fontWeight: 600 }}>Clear all items from cart?</div>
              <button
                onClick={clearCart}
                style={{
                  background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                  padding: '0.5rem 1.5rem',
                  fontSize: '1rem',
                  marginRight: '0.7rem',
                  cursor: 'pointer'
                }}
              >Yes, Clear</button>
              <button
                onClick={() => setShowClearConfirm(false)}
                style={{
                  background: '#fff',
                  color: '#0d4888',
                  border: '1px solid #0d4888',
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                  padding: '0.5rem 1.5rem',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >Cancel</button>
            </div>
          )}
          <button
            onClick={checkout}
            disabled={cartItems.length === 0}
            style={{
              background: cartItems.length === 0 ? '#ccc' : 'linear-gradient(90deg, #0d4888 0%, #1e90ff 100%)',
              color: cartItems.length === 0 ? '#666' : '#fff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '0.7rem 2.2rem',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s, color 0.2s',
              cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'
            }}
          >Proceed to Checkout</button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24" style={{ marginBottom: '1rem' }}>
            <circle cx="12" cy="12" r="12" fill="#0d4888" opacity="0.1"/>
            <path d="M7 13l3 3 7-7" stroke="#0d4888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 style={{ color: '#0d4888', fontWeight: 700, marginBottom: '0.5rem' }}>Order Placed Successfully!</h3>
          <p style={{ color: '#555', marginBottom: '1.5rem' }}>Thank you for your order. Your delicious pizza will be delivered soon!</p>
          <button
            className="btn btn-primary"
            style={{
              background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '0.6rem 2rem',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s, color 0.2s',
              cursor: 'pointer'
            }}
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Cart;
