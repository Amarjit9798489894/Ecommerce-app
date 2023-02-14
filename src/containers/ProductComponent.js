import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, countDown } from "../redux/actions/ProductActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductComponent = () => {
  // using state to render the updated list
  const [rend, setRenders] = useState([]);
  const [rendAdded, setRendersAdded] = useState([]);
  const [counter, setCount] = useState(2);

  // getting manually added and api given Products using redux states
  const products = useSelector((state) => state.allProducts.products);
  const productAdded = useSelector((state) => state.adding.array);
  const count = useSelector((state) => state.manageCount);

  const dispatch = useDispatch();

  const functionName = (id) => {
    // removing the particular id product from list
    const newRenders = rend.filter((object) => {
      return object.id !== id;
    });

    // setting newly updated list
    setRenders(newRenders);

    //   showing notification that the product  is deleted
    toast.warn("Deleted From List", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const functionNameDelete = (id) => {
    // removing the particular id product from list
    const newRenders = rendAdded.filter((object) => {
      return object.id !== id;
    });

    // setting newly updated list
    setRendersAdded(newRenders);

    //   showing notification that the product  is deleted
    toast.warn("Deleted From List", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const add = (product) => {
    if (count[product.id - 1] <= 0) {
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

      setCount(count[product.id - 1]);
    }
  };

  useEffect(() => {
    // launch of all products
    setRenders(products);
    setRendersAdded(productAdded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRenders, products]);

  // mapping the manually added products first
  if (rendAdded) {
    var renderListPayload = rendAdded.map((product) => {
      const { id, title, image, price, category } = product;
      var trimmedTitle = "";
      if (title.length < 60) {
        trimmedTitle = title;
      } else {
        trimmedTitle = title.substr(0, 60) + "...";
      }
      return (
        <div className=" column" key={id + counter} title={title}>
          <div className="ui link cards">
            <div className="card">
              <div className="tag" style={styles}>
                <span className="badge rounded-pill bg-danger">
                  {count[id - 1]}
                </span>
              </div>
              <div className="image">
                <img src={image} alt={trimmedTitle} />
              </div>
              <Link to={`/product/${id}`}>
                <div className="content">
                  <div className="header headerFrontPage">{trimmedTitle}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta category">{category}</div>
                </div>
              </Link>

              <div
                onClick={() => {
                  add(product);
                }}
                className="ui vertical animated button"
                tabIndex="0"
              >
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
              <div
                onClick={() => functionNameDelete(id)}
                className="ui vertical animated button ui right floated button"
                tabIndex="0"
                style={{ backgroundColor: "#eb9898" }}
              >
                <div className="hidden content">
                  <i className="remove icon"></i>
                </div>
                <div className="visible content">Delete Product</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  // mapping the products gotten from the api
  const renderList = rend.map((product) => {
    const { id, title, image, price, category } = product;
    var trimmedTitle=''
    if (title.length < 60) {
      trimmedTitle = title;
    } else {
      trimmedTitle = title.substr(0, 60) + "...";
    }
    return (
      <div
        className=" column"
        key={id}
        style={{ width: "250px" }}
        title={title}
      >
        <div className="ui link cards">
          <div className="card">
            <div className="tag" style={styles}>
              <span className="badge rounded-pill bg-danger">
                ONLY {count[id - 1]} Left
              </span>
            </div>
            <div className="image">
              <img src={image} alt={trimmedTitle} />
            </div>
            <Link to={`/product/${id}`}>
              <div className="content">
                <div className="header headerFrontPage">{trimmedTitle}</div>
                <div className="meta price"> At just $ {price}</div>
                <div className="meta category">{category}</div>
              </div>
            </Link>
            <div
              onClick={() => {
                add(product);
              }}
              className="ui vertical animated button"
              tabIndex="0"
            >
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
            <div
              onClick={() => functionName(id)}
              className="ui vertical animated button ui right floated button"
              tabIndex="0"
              style={{ backgroundColor: "#eb9898" }}
            >
              <div className="hidden content">
                <i className="remove icon"></i>
              </div>
              <div className="visible content">Delete Product</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {renderListPayload}
      {renderList}
    </>
  );
};

export default ProductComponent;
const styles = {
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  zIndex: 1,
};
