import { ListGroupItem } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import { BsPlus, BsDash, BsTrash } from 'react-icons/bs';

import "../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../slices/cartSlice";

const CartItem = ({ item, onClose }) => {
  const { id, title, price, image01, quantity, extraIngredients } = item;
  //let navigate = useNavigate(); 

  const dispatch = useDispatch();

  const incrementItem = (event) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
        extraIngredients
      })
    );
    event.stopPropagation();
  };

  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  const deleteItem = (event) => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

//   const handlemealselection = () =>  {
//     navigate(`/meals/${id}`);
//     onClose(); 
//   }

  return (
    <ListGroupItem className="border-0 cart__item" >
      <div className="cart__item-info d-flex gap-4">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>R {price}</span>
            </p>
            <div className="d-flex flex-column">
            {
              extraIngredients !== undefined && (
                Array.from(extraIngredients).map(value => {
                  return(
                    <span key={value} className="m-0">
                      {value}
                    </span>
                  )
                })
                )
              }
              </div>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={event => incrementItem(event)}>
                {/* <i className="ri-add-line"></i> */}
                <BsPlus />
                
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={event => decreaseItem(event)}>
              <BsDash />
                {/* <i className="ri-subtract-line"></i> */}
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={event => deleteItem(event)}>
          <BsTrash />
            {/* <i className="ri-close-line"></i> */}
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
