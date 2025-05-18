import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { UserContext } from '../Pages/UserContext';
import '../styles/Order.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import nonveg1 from '../Images/nonveg_pizza (1).png';
import nonveg2 from '../Images/nonveg_pizza (2).png';
import nonveg4 from '../Images/nonveg_pizza (4).png';
import veg2 from '../Images/veg_pizza (2).png';
import veg3 from '../Images/veg_pizza (3).png';
import veg4 from '../Images/veg_pizza (4).png';
import veg5 from '../Images/veg_pizza (5).png';
import veg6 from '../Images/veg_pizza (6).png';
import img7 from '../Images/veg_pizza (7).png';

const pizzas = [
  { name: 'FRESH VEGGIE', type: 'Veg', imgSrc: img7, description: 'Onion & Capsicum', price: 250 },
  { name: 'NON VEGGIE DELIGHT', type: 'Non-Veg', imgSrc: nonveg1, description: 'Chicken & Capsicum', price: 500 },
  { name: 'MARGHERITA', type: 'Veg', imgSrc: veg2, description: 'A hugely popular margherita, with a deliciously tangy single cheese topping', price: 200 },
  { name: 'CHICKEN DOMINATOR', type: 'Non-Veg', imgSrc: nonveg4, description: 'Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers', price: 550 },
  { name: 'PEPPY PANEER', type: 'Veg', imgSrc: veg3, description: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!', price: 300 },
  { name: 'CHICKEN TIKKA', type: 'Non-Veg', imgSrc: nonveg2, description: 'Chicken Tikka & Red Paprika', price: 450 },
  { name: 'INDI TANDOORI PANEER', type: 'Veg', imgSrc: veg4, description: 'Tandoori paneer with capsicum and red paprika topped with mint mayo', price: 350 },
  { name: 'MEXICAN GREEN WAVE', type: 'Veg', imgSrc: veg5, description: 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno', price: 375 },
  { name: 'VEG EXTRAVAGANZA', type: 'Veg', imgSrc: veg6, description: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', price: 400 },
];

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filter, setFilter] = useState('All');
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const addToCart = (itemName, itemPrice) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.name === itemName);
      if (existingItemIndex !== -1) {
        const updatedCartItems = prevCartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              amount: (item.quantity + 1) * itemPrice
            };
          }
          return item;
        });
        return updatedCartItems;
      } else {
        return [...prevCartItems, { name: itemName, price: itemPrice, quantity: 1, amount: itemPrice }];
      }
    });
  };

  const checkout = async () => {
    if (!user) {
      alert('Please log in to checkout.');
      return;
    }

    try {
      const orderDetails = {
        userId: user._id,
        items: cartItems.map((item, index) => ({
          index: index + 1,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        totalAmount
      };

      const response = await axios.post('http://localhost:8000/checkout', orderDetails);

      if (response.status === 200) {
        setShowModal(true); // Show success modal
        setCartItems([]);
        setTotalAmount(0);
      } else {
        alert('There was a problem with your order. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred during checkout. Please try again.');
    }
  };

  const filteredPizzas = pizzas.filter(pizza => filter === 'All' || pizza.type === filter);

  return (
    <Container fluid className="order-container" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <Row className="justify-content-center">
        <Col lg={8} md={12} className="menu-add" id="menu-add">
          <h1>Domino's Pizza Order</h1>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" onClick={() => setFilter('Veg')}>Veg</button>
              <button className="dropdown-item" onClick={() => setFilter('Non-Veg')}>Non Veg</button>
              <button className="dropdown-item" onClick={() => setFilter('All')}>All</button>
            </div>
            <span id="selectedOption">{filter}</span>
          </div>
          <Row className="menu-container" style={{ gap: '2rem', justifyContent: 'center' }}>
            {filteredPizzas.length === 0 ? (
              <Col xs={12} className="text-center" style={{ color: '#888', fontSize: '1.3rem', marginTop: '2rem' }}>
                No pizzas found for this filter.
              </Col>
            ) : (
              filteredPizzas.map((pizza, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} className="d-flex align-items-stretch">
                  <div
                    className={`pizza-item ${pizza.type}`}
                    style={{
                      border: 'none',
                      borderRadius: '1.2rem',
                      background: pizza.type === 'Veg'
                        ? 'linear-gradient(120deg, #e0ffe7 60%, #b2f7c1 100%)'
                        : 'linear-gradient(120deg, #fff0e0 60%, #ffd6b2 100%)',
                      boxShadow: '0 2px 16px rgba(13,72,136,0.08)',
                      padding: '1.5rem 1rem',
                      textAlign: 'center',
                      width: '100%',
                      marginBottom: '1.5rem',
                      transition: 'transform 0.18s, box-shadow 0.18s',
                      flex: 1
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,72,136,0.14)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 16px rgba(13,72,136,0.08)'; }}
                  >
                    <img src={pizza.imgSrc} alt={`${pizza.name} Pizza`} style={{
                      width: '110px',
                      height: '110px',
                      objectFit: 'contain',
                      borderRadius: '1rem',
                      marginBottom: '1rem',
                      background: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                    }} />
                    <h3 style={{
                      fontFamily: "'Poppins','proximaNova',sans-serif",
                      fontWeight: 700,
                      color: '#0d4888',
                      fontSize: '1.2rem',
                      marginBottom: '0.5rem'
                    }}>{pizza.name}</h3>
                    <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '0.5rem' }}>{pizza.description}</p>
                    <p style={{ fontWeight: 600, color: '#232323', marginBottom: '1rem' }}>Rs.{pizza.price}</p>
                    <button
                      onClick={() => addToCart(pizza.name, pizza.price)}
                      style={{
                        background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        padding: '0.5rem 1.5rem',
                        fontSize: '1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                        transition: 'background 0.2s, color 0.2s',
                        cursor: 'pointer'
                      }}
                    >Add to Cart</button>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Col>
        <Col lg={4} md={12} className="cart" style={{
          background: '#fff',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 24px rgba(13,72,136,0.08)',
          margin: '1.5rem 0',
          padding: '2.5rem 1.7rem',
          minWidth: '260px',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: '#0d4888',
            fontFamily: "'Poppins','proximaNova',sans-serif",
            fontWeight: 700,
            marginBottom: '1.2rem'
          }}>Cart</h2>
          <ul style={{ width: '100%', padding: 0, listStyle: 'none', marginBottom: '1.2rem' }}>
            {cartItems.length === 0 ? (
              <li style={{ color: '#888', textAlign: 'center', fontSize: '1.1rem' }}>Your cart is empty.</li>
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
                  boxShadow: '0 1px 4px rgba(13,72,136,0.04)'
                }}>
                  {index + 1}. {item.name} <br />
                  <span style={{ fontSize: '0.95rem', color: '#0d4888' }}>Qty: {item.quantity}</span> &nbsp;
                  <span style={{ fontSize: '0.95rem', color: '#555' }}>Price: Rs.{item.price}</span> <br />
                  <span style={{ fontWeight: 600, color: '#dd2476' }}>Amount: Rs.{item.amount}</span>
                </li>
              ))
            )}
          </ul>
          <h3 style={{
            color: '#ff512f',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>Total Amount: Rs.{totalAmount}</h3>
          <button
            onClick={checkout}
            style={{
              background: 'linear-gradient(90deg, #0d4888 0%, #1e90ff 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '0.7rem 2.2rem',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              transition: 'background 0.2s, color 0.2s',
              cursor: 'pointer'
            }}
          >Checkout</button>
        </Col>
      </Row>
      {/* Payment Success Modal */}
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

export default Order;
