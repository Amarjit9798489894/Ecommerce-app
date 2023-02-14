import React from "react";
import { useDispatch, useSelector } from "react-redux";
import meme from "../containers/shoppMEME.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  countDown,
  countUp,
  removeFromCart,
} from "../redux/actions/ProductActions";
import { Link } from "react-router-dom";

export default function Cart() {
  // getting cart product from redux state
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.manageCount);
  // const [counter,setCounter]=useState(2)
  const remove = (product) => {
    // giving notification that product is removed from cart
    toast.warn("Removed From Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(countUp(product.id - 1));
    // dispatching the remove action
    dispatch(removeFromCart(product));
  };

  const add = (product) => {
    console.log(counter[product.id]);
    if (counter[product.id - 1] <= 0) {
      toast.warn("Product Out Of Stock", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      // dispatching action of add to cart product
      dispatch(countDown(product.id - 1));
      dispatch(addToCart(product));
      // showing notification that the product  is added to cart
      toast.success("Product Added to Cart Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // calculating sum for checkout
  const sum = () => {
    const sum1 = products.reduce((accumulator, object) => {
      // console.log(object);
      return accumulator + object.price * object.qty;
    }, 0);
    return sum1;
  };
  var total = sum();

  // rendering the products got from the redux state using map function
  const renderList = products.map((product) => {
    const { id, title, image, price, category, qty } = product;
    return (
      <div className="ui items bg-faint" key={id}>
        <div className="item">
          <div className="ui small image">
            <img src={image} alt={id} />
          </div>
          <div className="middle aligned content">
            <div className="header">{title}</div>

            <div className="meta description">
              <span className="price">
                {" "}
                <strong>$ {price}</strong>{" "}
              </span>
              <br />
              <span className="stay">{category}</span>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    add(product);
                  }}
                >
                  +
                </button>
                <span className="qty">{qty}</span>
                <button
                  className="btn"
                  onClick={() => {
                    remove(product);
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div className="extra">
              {/* {(!qty>0)?('heyluu'):('belli')} */}
              <div
                onClick={() => {
                  remove(product);
                }}
                className="ui vertical animated button ui right floated button"
                tabIndex="0"
              >
                <div className="hidden content">
                  <i className="remove icon"></i>
                </div>
                <div className="visible content">Remove From Cart</div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  });

  if (products.length === 0) {
    return (
      <div>
        <img src={meme} className="ui centered medium image" alt="MEME" />
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/check-out">
          <div
            className="ui animated right floated fade button"
            tabIndex="0"
            style={btn}
          >
            <div className="visible content" style={{ marginBottom: "4%" }}>
              {total.toFixed(3)} Dollars Only
            </div>
            <div className="hidden content">Proceed to check out</div>
          </div>
        </Link>
        <div className="ui container" style={{ margin: 90 }}>
          {renderList}
        </div>
      </div>
    );
  }
}

const btn = {
  margin: "-57px 124px 25px 20px",
};
