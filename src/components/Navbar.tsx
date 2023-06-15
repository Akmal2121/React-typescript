import React from 'react';
import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/shoppingCartContext";

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        style={{
                            width: '3rem',
                            height: '3rem',
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        variant="outline-primary"
                        className="rounded-circle"
                    >
                        <img src="/cart.png" alt="" width={50}
                             className="d-flex justify-content-center align-items-center"/>
                        <div
                            className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
                            style={{position: "absolute", width: '1.5rem', height: "1.5rem", bottom: -5, right: -5}}>
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
