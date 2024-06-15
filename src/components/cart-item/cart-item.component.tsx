import { FC } from 'react';

import { CartItemContainer } from './cart-item.styles';

import { CartItem as TCartItem } from '../../store/cart/cart.types';

export type CartItemProps = {
    cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} className='' alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </CartItemContainer>
    )
}

export default CartItem;