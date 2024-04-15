import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductCardFooter,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, product));

    return (
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ProductCardFooter>
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </ProductCardFooter>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to card
        </Button>
      </ProductCardContainer>
    );
}

export default ProductCard;