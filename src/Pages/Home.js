import React, { useRef } from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
// Removed import of Header to avoid duplicate navbar
import header from '../Images/header_bg.png';
import menu from '../Images/menu1.jpeg';
import pizzaVeg from '../Images/veg_pizza (2).png';
import pizzaNonVeg from '../Images/nonveg_pizza (1).png';
import pizza3 from '../Images/veg_pizza (3).png';
import pizza4 from '../Images/nonveg_pizza (2).png';
import deal1 from '../Images/amazon_home_20210412.jpg';
import deal2 from '../Images/Home_Paytm_20210519.jpg';
import deal3 from '../Images/Home_airtel_30082020.jpg';
import deal4 from '../Images/Home_Freecharge_20210405.jpg';
import testimonial1 from '../Images/virtual_pizza_party.png';
import '../styles/Home.css';

const featuredPizzas = [
  {
    img: pizzaVeg,
    title: "Veggie Paradise",
    desc: "Loaded with fresh veggies and cheese.",
    price: 299
  },
  {
    img: pizzaNonVeg,
    title: "Chicken Dominator",
    desc: "A treat for meat lovers with spicy chicken.",
    price: 399
  },
  {
    img: pizza3,
    title: "Paneer Makhani",
    desc: "Indian flavors with soft paneer cubes.",
    price: 349
  },
  {
    img: pizza4,
    title: "Pepperoni Feast",
    desc: "Classic pepperoni with extra cheese.",
    price: 429
  }
];

const deals = [
  { img: deal1, title: "Amazon Pay Offer", desc: "Get cashback on Amazon Pay." },
  { img: deal2, title: "Paytm Cashback", desc: "Flat cashback on Paytm wallet." },
  { img: deal3, title: "Airtel Payments Bank", desc: "Special discounts for Airtel users." },
  { img: deal4, title: "Freecharge Deal", desc: "Exciting Freecharge wallet offers." }
];

const testimonials = [
  {
    img: testimonial1,
    name: "Priya S.",
    text: "Domino's never disappoints! The pizza always arrives hot and fresh. Love the quick delivery."
  },
  {
    img: pizzaVeg,
    name: "Rahul K.",
    text: "Best pizza deals in town! The app is super easy to use and the offers are amazing."
  },
  {
    img: pizzaNonVeg,
    name: "Anjali M.",
    text: "I love the variety of pizzas and the contactless delivery option. Highly recommended!"
  }
];

function Home() {
  const featuredRef = useRef(null);

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Removed <Header /> to avoid duplicate navbar */}
      <div
        className="home-modern-bg"
        style={{
          paddingTop: 0,
          background: 'linear-gradient(120deg, #f8fafc 60%, #e6f0ff 100%)',
          minHeight: '100vh',
          margin: 0,
          boxSizing: 'border-box'
        }}
      >
        {/* Hero Section */}
        <section className="hero-section" style={{
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '62vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          marginTop: 0,
          paddingTop: 0,
          borderTop: 0
        }}>
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(13,72,136,0.55)'
          }} />
          <Container style={{
            position: 'relative',
            zIndex: 2,
            marginTop: 0,
            paddingTop: 0
          }}>
            <div className="hero-content" style={{
              color: '#fff',
              textAlign: 'center',
              padding: '1.5rem 1rem 2.5rem 1rem',
              marginTop: '0.5rem'
            }}>
              <div>
                {/* Heading removed as requested */}
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Pizzas */}
        <section ref={featuredRef} className="featured-pizzas-section" style={{padding: '3rem 0 2rem 0'}}>
          <Container>
            <h2 className="section-title" style={{
              color: '#0d4888',
              fontWeight: 800,
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '2.5rem',
              letterSpacing: '1px'
            }}>
              Featured Pizzas
            </h2>
            <Row className="featured-pizzas-row" style={{gap: '2rem 0'}}>
              {featuredPizzas.map((pizza, idx) => (
                <Col key={idx} xs={12} sm={6} md={3} className="d-flex align-items-stretch">
                  <Card className="featured-pizza-card" style={{
                    borderRadius: '1.5rem',
                    boxShadow: '0 2px 16px rgba(13,72,136,0.08)',
                    border: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    width: '100%',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Card.Img variant="top" src={pizza.img} alt={pizza.title} style={{
                      height: '170px',
                      objectFit: 'contain',
                      borderTopLeftRadius: '1.5rem',
                      borderTopRightRadius: '1.5rem',
                      background: '#f8fafc'
                    }} />
                    <Card.Body>
                      <Card.Title style={{fontWeight: 'bold', color: '#0d4888', fontSize: '1.2rem'}}>{pizza.title}</Card.Title>
                      <Card.Text style={{color: '#555', minHeight: '48px'}}>{pizza.desc}</Card.Text>
                      <div style={{fontWeight: 700, color: '#ff512f', fontSize: '1.1rem', marginBottom: '0.7rem'}}>₹{pizza.price}</div>
                      <Button
                        variant="primary"
                        style={{
                          background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                          border: 'none',
                          borderRadius: '25px',
                          fontWeight: 'bold',
                          padding: '0.5rem 1.5rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                          transition: 'background 0.3s'
                        }}
                        href="/orders"
                      >
                        Order Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Current Deals */}
        <section className="deals-section" style={{background: '#f8fafc', padding: '3rem 0'}}>
          <Container>
            <h2 className="section-title" style={{
              color: '#0d4888',
              fontWeight: 800,
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '2.5rem',
              letterSpacing: '1px'
            }}>
              Current Deals
            </h2>
            <Row className="deals-row" style={{gap: '2rem 0'}}>
              {deals.map((deal, idx) => (
                <Col key={idx} xs={12} sm={6} md={3} className="d-flex align-items-stretch">
                  <Card className="deal-card" style={{
                    borderRadius: '1.5rem',
                    boxShadow: '0 2px 16px rgba(13,72,136,0.08)',
                    border: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    width: '100%',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Card.Img variant="top" src={deal.img} alt={deal.title} style={{
                      height: '120px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '1.5rem',
                      borderTopRightRadius: '1.5rem'
                    }} />
                    <Card.Body>
                      <Card.Title style={{fontWeight: 'bold', color: '#0d4888', fontSize: '1.1rem'}}>{deal.title}</Card.Title>
                      <Card.Text style={{color: '#555'}}>{deal.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section" style={{
          background: 'linear-gradient(120deg, #fff 60%, #f0f4ff 100%)',
          borderRadius: '2rem',
          margin: '2rem 0',
          padding: '3rem 0',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
        }}>
          <Container>
            <h2 className="section-title" style={{
              color: '#0d4888',
              fontWeight: 800,
              fontSize: '2.2rem',
              textAlign: 'center',
              marginBottom: '2.5rem',
              letterSpacing: '1px'
            }}>
              What Our Customers Say
            </h2>
            <Row className="testimonials-row" style={{gap: '2rem 0', justifyContent: 'center'}}>
              {testimonials.map((t, idx) => (
                <Col key={idx} xs={12} sm={6} md={4} className="d-flex align-items-stretch">
                  <Card className="testimonial-card" style={{
                    borderRadius: '1.5rem',
                    boxShadow: '0 2px 16px rgba(13,72,136,0.08)',
                    border: 'none',
                    padding: '1.5rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: '#fff',
                    width: '100%'
                  }}>
                    <Card.Body>
                      <Card.Text style={{fontStyle: 'italic', color: '#444', marginBottom: '1rem'}}>"{t.text}"</Card.Text>
                      <Card.Title style={{color: '#0d4888', fontWeight: 700, fontSize: '1rem'}}>- {t.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
