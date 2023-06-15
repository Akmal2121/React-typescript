import React from 'react';
import {useShoppingCart} from "../context/shoppingCartContext";
import {Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack} from "react-bootstrap";
import CartItem from "./CartItem";
import {formatCurrency} from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart, cartItems} = useShoppingCart()

    function getTotalPrice() {
        return cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
        }, 0)
    }

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map(item =>
                        <CartItem key={item.id} {...item} />
                    )}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(getTotalPrice())}
                    </div>
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default ShoppingCart;
