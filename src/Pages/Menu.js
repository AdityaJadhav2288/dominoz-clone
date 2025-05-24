import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import img1 from '../Images/i (1).png';
import img2 from '../Images/i (2).png';
import img3 from '../Images/i (3).png';
import img4 from '../Images/i (4).png';
import '../styles/Menu.css'; // Import your CSS file

const MenuSlide = ({ imgSrc, imgAlt, heading, content, orderLink }) => (
  <div className="menu-slide-wrapper-modern">
    <div className="menu-slide-modern">
      <img src={imgSrc} alt={imgAlt} className="menu-img-modern" />
      <div className="menu-desc-modern">
        <h3 className="menu-heading-modern">{heading}</h3>
        <p className="menu-content-modern">{content}</p>
      </div>
      <Link to={orderLink}>
        <button className="menu-now-modern">
          ORDER
        </button>
      </Link>
    </div>
  </div>
);

const MenuSlider = () => (
  <div className="menu-slider-modern">
    <MenuSlide
      imgSrc={img1}
      imgAlt="Veg Pizza"
      heading="VEG PIZZA"
      content="A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier"
      orderLink="/orders"
    />
    <MenuSlide
      imgSrc={img2}
      imgAlt="Non-Pizza"
      heading="NON-PIZZA"
      content="Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings"
      orderLink="/orders"
    />
    <MenuSlide
      imgSrc={img3}
      imgAlt="Pizza Mania"
      heading="PIZZA MANIA"
      content="Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings"
      orderLink="/orders"
    />
    <MenuSlide
      imgSrc={img4}
      imgAlt="Sides and Beverages"
      heading="SIDES & BEVERAGES"
      content="Complement your pizza with wide range of sides & beverages available at Domino's Pizza India"
      orderLink="/orders"
    />
  </div>
);

const Menu = () => (
  <>
    <div style={{ background: 'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)', minHeight: '100vh', paddingBottom: '2rem', paddingTop: '90px' }}>
      <Row className="text-center py-4 justify-content-center">
        <Col md="auto">
          <h1 className="menu-title-modern">DOMINO'S MENU</h1>
        </Col>
      </Row>
      <Container>
        <MenuSlider />
      </Container>
    </div>
  </>
);

export default Menu;
