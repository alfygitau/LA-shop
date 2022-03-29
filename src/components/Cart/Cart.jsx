import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log("cart", cart);
  const navigate = useNavigate();

  const removeProduct = (product) => {
    dispatch(deleteCart(product));
  };

  return (
    <div className="container">
      <h2 className="display-6 fw-bolder text-center">My Shopping Bag</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {cart.length < 1 ? (
          <>
            <h4>Cart is currently empty</h4>
            <button
              className="btn btn-outline-dark"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </>
        ) : (
          cart.map((product) => (
            <tbody key={product.id}>
              <tr>
                <th scope="row">{product.id}</th>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    height="40px"
                    width="40px"
                  />
                </td>
                <td>{product.title}</td>
                <td>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(product)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      {cart.length >= 1 ? (
        <button className="btn btn-outline-dark">Proceed to checkout</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
