import React, { useContext, useState, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { UserContext } from '../Pages/UserContext';
import Header from '../components/Header';
import '../styles/Order.css';

const pizzas = [
  { name: 'FRESH VEGGIE', type: 'Veg', imgSrc: require('../Images/veg_pizza (7).png'), description: 'Onion & Capsicum', price: 250 },
  { name: 'NON VEGGIE DELIGHT', type: 'Non-Veg', imgSrc: require('../Images/nonveg_pizza (1).png'), description: 'Chicken & Capsicum', price: 500 },
  { name: 'MARGHERITA', type: 'Veg', imgSrc: require('../Images/veg_pizza (2).png'), description: 'A hugely popular margherita, with a deliciously tangy single cheese topping', price: 200 },
  { name: 'CHICKEN DOMINATOR', type: 'Non-Veg', imgSrc: require('../Images/nonveg_pizza (4).png'), description: 'Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers', price: 550 },
  { name: 'PEPPY PANEER', type: 'Veg', imgSrc: require('../Images/veg_pizza (3).png'), description: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!', price: 300 },
  { name: 'CHICKEN TIKKA', type: 'Non-Veg', imgSrc: require('../Images/nonveg_pizza (2).png'), description: 'Chicken Tikka & Red Paprika', price: 450 },
  { name: 'INDI TANDOORI PANEER', type: 'Veg', imgSrc: require('../Images/veg_pizza (4).png'), description: 'Tandoori paneer with capsicum and red paprika topped with mint mayo', price: 350 },
  { name: 'MEXICAN GREEN WAVE', type: 'Veg', imgSrc: require('../Images/veg_pizza (5).png'), description: 'Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno', price: 375 },
  { name: 'VEG EXTRAVAGANZA', type: 'Veg', imgSrc: require('../Images/veg_pizza (6).png'), description: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', price: 400 },
];

function Order() {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const addToCart = (pizza) => {
    setShowModal(true);
  };

  const filteredAndSortedPizzas = useMemo(() => {
    let filtered = pizzas;
    if (filterType !== 'All') {
      filtered = pizzas.filter(p => p.type === filterType);
    }
    if (sortOrder === 'priceLowHigh') {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceHighLow') {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [filterType, sortOrder]);

  return (
    <>
      <Header />
      <Container fluid className="order-container" style={{ minHeight: '100vh', paddingTop: '90px', paddingBottom: '2rem' }}>
        <Row className="mb-3 justify-content-end">
          <Col xs="auto">
            <Form.Select
              aria-label="Filter pizzas by type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ minWidth: '150px' }}
            >
              <option value="All">All Types</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Form.Select
              aria-label="Sort pizzas by price"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{ minWidth: '180px' }}
            >
              <option value="default">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1 className="order-title">Domino's Pizza Order</h1>
            <Row className="menu-container" style={{ gap: '2rem', justifyContent: 'center' }}>
              {filteredAndSortedPizzas.map((pizza, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                  <Card className={`pizza-item ${pizza.type}`} style={{ cursor: 'pointer' }}>
                    <Card.Img variant="top" src={pizza.imgSrc} alt={`${pizza.name} Pizza`} style={{ height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
                    <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Title className="text-primary fw-bold">{pizza.name}</Card.Title>
                      <Card.Text className="text-secondary text-center">{pizza.description}</Card.Text>
                      <Card.Text className="fw-semibold text-dark">Rs. {pizza.price}</Card.Text>
                      <Button
                        variant="danger"
                        className="mt-auto rounded-pill px-4"
                        onClick={() => addToCart(pizza)}
                        style={{ background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)', border: 'none' }}
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static" keyboard={false}>
          <Modal.Body className="text-center py-4">
            <svg width="64" height="64" fill="none" viewBox="0 0 24 24" className="mb-3">
              <circle cx="12" cy="12" r="12" fill="#0d4888" opacity="0.1" />
              <path d="M7 13l3 3 7-7" stroke="#0d4888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-primary fw-bold mb-2">Order Added to Cart!</h3>
            <p className="text-secondary mb-3">You can proceed to billing or continue shopping.</p>
            <Button variant="primary" onClick={() => setShowModal(false)} className="rounded-pill px-4">
              Close
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
}

export default Order;
