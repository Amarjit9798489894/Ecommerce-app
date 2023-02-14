import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../redux/actions/ProductActions";

function CreateProduct() {
  // using state to set the different properties of item
  const [id, setId] = useState(21);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // using dispatch  method from redux
  const dispatch = useDispatch();

  const adding = () => {
    // creating item object using data got from user
    const data = [
      {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
        category: category,
      },
    ];

    // dispatching data action to reducer
    dispatch(addProduct(data));

    // updating  id to next
    setId(id + 1);

    // showing notification that the product is added
    toast.success("Product Added List Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // rendering input form
  return (
    <div className="divStyle">
      {/* <form className=""> */}
      <div className="container" style={titl}>
        <label htmlFor="inputEmail4">
          <h3>Title</h3>{" "}
        </label>
        <div className="ui focus input" style={{ marginTop: "5px" }}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="container" style={desc}>
        <label htmlFor="inputEmail4">
          <h3>Description</h3>
        </label>
        <div className="ui focus input">
          <textarea
            type="text"
            placeholder="Description"
            rows="4"
            cols="69"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="container" style={prie}>
        <label htmlFor="inputEmail4">
          <h3>Price</h3>
        </label>
        <div className="ui focus input">
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="container" style={rating}>
        <label htmlFor="inputEmail4">
          <h3>Rating</h3>
        </label>
        <div className="ui focus input" style={{ marginTop: "5px" }}>
          <input
            type="number"
            placeholder="Rating"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <div className="container" style={img}>
        <label htmlFor="inputEmail4">
          <h3>Select image for product</h3>
        </label>
        <div className="ui">
          <input
            type="file"
            placeholder="Select image for product"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <Link to="/">
        <div onClick={adding} style={btn}>
          <button type="button" className="ui button">
            Add Product
          </button>
        </div>{" "}
      </Link>
      {/* </form> */}
    </div>
  );
}

export default CreateProduct;

const desc = {
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
  resize:"false"
};

const titl = {
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
};
const prie = {
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
};
const rating = {
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
};
const btn = {
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
  color: "green",
};

const img = {
  marginTop: "35px",
  display: "flex",
  justifyContent: "space-between",
  gap: "52px",
  textAlign: "center",
};
