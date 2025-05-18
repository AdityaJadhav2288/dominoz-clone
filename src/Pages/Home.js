import React, { useEffect, useRef, useState, useContext } from "react";
import { Button, Card, Col, Row, Container, Modal, Carousel } from "react-bootstrap";
import header from '../Images/header_bg.png';
import banner from '../Images/banner_brand_20210922.jpg';
import menu from '../Images/menu1.jpeg';
import store from '../Images/store.png';
import pizzaVeg from '../Images/veg_pizza (2).png';
import pizzaNonVeg from '../Images/nonveg_pizza (1).png';
import '../styles/Home.css';

const AppImg = () => (
  <div className="app-img">
    <img
      className="app-img-desktop"
      src={require('../Images/new_app_img.png')}
      alt="App Promotional"
    />
    <div className="app-download-wrapper">
      <h3 className="app-download">Unlock Exclusive Offers</h3>
      <p>For lightning fast ordering experience download the Domino’s app</p>
      <ul className="appdownload-img">
        <li>
          <button onClick={() => window.location.href='#'}>
            <img
              src={require('../Images/app_store.png')}
              alt="Google Play Store"
            />
          </button>
        </li>
        <li>
          <button onClick={() => window.location.href='#'}>
            <img
              src={require('../Images/app_store.png')}
              alt="Apple App Store"
            />
          </button>
        </li>
      </ul>
    </div>
  </div>
);

function Home() {
  const exploreRef = useRef(null);

  return (
    <div>
      <div className="online-order" id="online-banner" style={{
        backgroundColor: '#0d4888',
        backgroundImage: `linear-gradient(120deg, #0d4888 60%, #1e90ff 100%)`,
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem 0'
      }}>
        <div className="banner-text" style={{padding: '0 2rem'}}>
          <h1 className="order-heading" style={{fontWeight: 'bold', fontSize: '2.5rem', color: '#fff', letterSpacing: '1px'}}>Domino's online ordering</h1>
          <p className="deliver-message" id="delivery-text" style={{color: '#e0e0e0', fontSize: '1.2rem'}}>Yummy pizza delivered fast & fresh</p>
          <a href="menu">
            <Button style={{
              background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              fontSize: '1.1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              marginTop: '1rem',
              transition: 'background 0.3s'
            }}>ORDER ONLINE NOW</Button>
          </a>
        </div>
        <div>
          <img
            src={header}
            alt="Food Delivery & Order Pizza Online"
            id="bannerImage"
            style={{borderRadius: '1rem', margin: '0 1rem', maxHeight: '180px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)'}}
          />
          <img
            src={banner}
            alt="Food Delivery & Order Pizza Online"
            id="higeneImage"
            style={{borderRadius: '1rem', margin: '0 1rem', maxHeight: '180px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)'}}
          />
        </div>
      </div>

      <section className="carousel-wrapper" style={{background: '#f8fafc', padding: '2rem 0'}}>
        <h2 className="carousel-title" style={{fontWeight: 'bold', color: '#0d4888', paddingLeft: '1rem'}}>Coupons & Offers</h2>
        <Row className="justify-content-center" style={{gap: '1.5rem 0'}}>
          {[
            {
              img: require('../Images/amazon_home_20210412.jpg'),
              title: "Amazon Pay Offer",
              desc: "Get cashback on paying with Amazon Pay."
            },
            {
              img: require('../Images/Home_Paytm_20210519.jpg'),
              title: "Paytm Cashback",
              desc: "Flat cashback on Paytm wallet payments."
            },
            {
              img: require('../Images/Home_airtel_30082020.jpg'),
              title: "Airtel Payments Bank",
              desc: "Special discounts for Airtel Payments Bank users."
            },
            {
              img: require('../Images/Home_Freecharge_20210405.jpg'),
              title: "Freecharge Deal",
              desc: "Exciting Freecharge wallet offers."
            },
            {
              img: require('../Images/Dominos_Mobi_Home_20210503.jpg'),
              title: "Mobikwik SuperCash",
              desc: "Earn SuperCash on Mobikwik payments."
            },
            {
              img: require('../Images/Home_payzapp_20201029.jpg'),
              title: "PayZapp Offer",
              desc: "Get instant discount with PayZapp."
            },
            {
              img: require('../Images/Home_au_20201029.jpg'),
              title: "AU Bank Offer",
              desc: "Exclusive deals for AU Bank customers."
            },
            {
              img: require('../Images/banner_brand_20210922.jpg'),
              title: "Domino's Special",
              desc: "Special Domino's offer: Buy 1 Get 1 Free on select pizzas!"
            }
          ].map((offer, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#fff',
                borderRadius: '1.5rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                padding: '1.5rem',
                margin: '0.75rem',
                width: '100%',
                height: '100%'
              }}>
                <img
                  className="d-block"
                  src={offer.img}
                  alt={offer.title}
                  style={{
                    maxHeight: '120px',
                    borderRadius: '1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    width: '100%',
                    objectFit: 'cover'
                  }}
                />
                <h5 style={{fontWeight: 'bold', color: '#0d4888', marginBottom: '0.5rem', textAlign: 'center'}}>{offer.title}</h5>
                <p style={{color: '#555', margin: 0, fontSize: '1rem', textAlign: 'center'}}>{offer.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section ref={exploreRef} style={{background: 'linear-gradient(120deg, #fff 60%, #f0f4ff 100%)', borderRadius: '2rem', margin: '2rem 0', padding: '2rem 0', boxShadow: '0 2px 16px rgba(0,0,0,0.06)'}}>
        <Row className="py-4">
          <Col className="text-center">
            <h3 style={{ color: '#0d4888', fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', fontSize: '2rem', letterSpacing: '1px' }}>Explore</h3>
          </Col>
        </Row>
        <Row className="text-center" style={{gap: '1rem', justifyContent: 'center'}}>
          {[{
            img: menu,
            title: "OUR MENU",
            text: "Explore our range of delicious Pizzas, delivered in 30 minutes!"
          }, {
            img: store,
            title: "OUR STORES",
            text: "Find a store near you and enjoy your favorite pizza!"
          }, 
          {
            img: pizzaVeg,
            title: "VEG PIZZA",
            text: "Try our delicious Veg Pizza with fresh toppings!"
          },
          {
            img: pizzaNonVeg,
            title: "NON-VEG PIZZA",
            text: "Enjoy our spicy Non-Veg Pizza, a meat lover's delight!"
          }
          ].map((card, idx) => (
            <Col md={3} key={idx} style={{marginBottom: '1.5rem'}}>
              <Card className="explore-card" style={{
                width: '16rem',
                borderRadius: '1.5rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}>
                <Card.Img variant="top" src={card.img} style={{ height: '150px', borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem', objectFit: 'cover' }} alt={card.title} />
                <Card.Body>
                  <Card.Title style={{fontWeight: 'bold', color: '#0d4888'}}>{card.title}</Card.Title>
                  <Card.Text style={{color: '#555'}}>{card.text}</Card.Text>
                  <Button variant="primary" style={{
                    background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    padding: '0.5rem 1.5rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    transition: 'background 0.3s'
                  }}>DISCOVER</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

function OrderSection({ pizzas, filter, setFilter, addToCart, cartItems, totalAmount, checkout, showModal, setShowModal }) {
  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff' }}>
      <Container fluid className="order-container" style={{ minHeight: '100vh' }}>
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
              {pizzas.filter(pizza => filter === 'All' || pizza.type === filter).length === 0 ? (
                <Col xs={12} className="text-center" style={{ color: '#888', fontSize: '1.3rem', marginTop: '2rem' }}>
                  No pizzas found for this filter.
                </Col>
              ) : (
                pizzas.filter(pizza => filter === 'All' || pizza.type === filter).map((pizza, index) => (
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
    </section>
  );
}

export default Home;
