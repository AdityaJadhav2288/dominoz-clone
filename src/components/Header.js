import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Pages/UserContext';
import logo from '../Images/logo.png';
import '../styles/Header.css';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      setUser(null);
      navigate('/login');
    }
  };

  // Collapse navbar on navigation (for mobile)
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      className={`navbar-modern dominos-sticky-navbar shadow-sm${expanded ? ' expanded' : ''}`}
      expand="lg"
      fixed="top"
      expanded={expanded}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container fluid>
        <div className="navbar-modern-left">
          <Navbar.Brand as={Link} to="/" className="navbar-modern-brand" tabIndex={0}>
            <img src={logo} alt="Domino's Logo" className="navbar-modern-logo" />
          </Navbar.Brand>
        </div>
        {/* Toggle button on right */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Navbar.Toggle
            aria-controls="modern-navbar-nav"
            className="navbar-modern-toggler"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(exp => !exp)}
            style={{ marginRight: '0.5rem' }}
          />
        </div>
        <Navbar.Collapse
          id="modern-navbar-nav"
          className={`navbar-modern-collapse${expanded ? ' show' : ''}`}
        >
          {/* Move nav to right and increase font size */}
          <Nav className="navbar-modern-center ms-auto" as="ul" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/"
                className={`navbar-modern-link${location.pathname === '/' ? ' active' : ''}`}
                onClick={handleNavClick}
                tabIndex={0}
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            {/* Removed Gift Cards section as per user request */}
            {/*
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/giftcards"
                className={`navbar-modern-link${location.pathname === '/giftcards' ? ' active' : ''}`}
                onClick={handleNavClick}
                tabIndex={0}
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                Gift Cards
              </Nav.Link>
            </Nav.Item>
            */}
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/menu"
                className={`navbar-modern-link${location.pathname === '/menu' ? ' active' : ''}`}
                onClick={handleNavClick}
                tabIndex={0}
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                Menu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/orders"
                className={`navbar-modern-link${location.pathname === '/orders' ? ' active' : ''}`}
                onClick={handleNavClick}
                tabIndex={0}
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/cart"
                className={`navbar-modern-link${location.pathname === '/cart' ? ' active' : ''}`}
                onClick={handleNavClick}
                tabIndex={0}
                style={{ fontSize: '1.25rem', fontWeight: 600 }}
              >
                Cart
              </Nav.Link>
            </Nav.Item>
            <div className="navbar-modern-right" style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
              {user ? (
                <>
                  <span className="navbar-modern-user">
                    <span className="navbar-modern-avatar">
                      {user.firstName ? user.firstName[0].toUpperCase() : 'U'}
                    </span>
                    <span className="navbar-modern-username">
                      {user.firstName}
                    </span>
                  </span>
                  <Nav.Link as={Link} to="#" onClick={() => { handleLogout(); handleNavClick(); }} className="navbar-modern-btn navbar-modern-logout" tabIndex={0} style={{ fontSize: '1.15rem', fontWeight: 600 }}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  {/* Removed Login and Signup links as per user request */}
                </>
              )}
              <div className="dominos-navbar-order" style={{ marginLeft: '0.7rem' }}>
                <Button
                  as={Link}
                  to="/orders"
                  className="dominos-order-btn"
                  onClick={handleNavClick}
                  tabIndex={0}
                  aria-label="Order Now"
                  style={{ fontSize: '1.15rem', fontWeight: 700 }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
