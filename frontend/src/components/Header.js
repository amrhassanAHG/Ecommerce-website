import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart" style={{ textDecoration: "none" }}>
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping"></i>Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login" style={{ textDecoration: "none" }}>
                <Nav.Link>
                  <i className="fa-solid fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
