import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import meme from "../containers/ThankYou.jpg";

export default function CheckOutPage() {
  const [submitt, setSubmitt] = useState(false);
  const products = useSelector((state) => state.handleCart);
  const sum = () => {
    const sum1 = products.reduce((accumulator, object) => {
      return accumulator + object.price * object.qty;
    }, 0);
    return sum1;
  };
  var total = sum();
  const submited = () => {
    setSubmitt(true);
  };


  const renderList = products.map((product) => {
    const { id, title, image, price, qty } = product;
    return (
      <div className="ui bg-faint relaxed items" key={id}>
        <div className="item">
          <div className="ui tiny image">
            <img src={image} alt="item"/>
          </div>

          <div className="middle aligned content">
            <Link to={`/product/${id}`}>
              <span className=" ui header">{title}</span>
            </Link>
          </div>

          <div className="ui header">
            {price} $ * {qty}
          </div>
        </div>
      </div>
    );
  });
  if (submitt) {
    return (
      <div>
        <img src={meme} className="ui centered medium image" alt="MEME" />
      </div>
    );
  } else {
    return (
      <div className="ui container" style={ctn}>
        <form className="ui form">
          <h2 className="ui dividing header text-white">Shipping Information</h2>
          <div className="field ">
            <label className="text-white">Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="First Name"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="shipping[last-name]"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="field ">
            <label className="text-white">Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="shipping[address]"
                  placeholder="Street Address"
                />
              </div>
              <div className="four wide field">
                <input
                  type="text"
                  name="shipping[address-2]"
                  placeholder="Apt #"
                />
              </div>
            </div>
          </div>
          <h4 className="ui dividing header text-white">Order Summary</h4>
          {renderList}

          <div className="ui  right floated  button" tabIndex="0" style={btn}>
            <div className="visible content">
              Total {"  "}:{"  "}{total.toFixed(3)} Dollars Only
            </div>
          </div>
          <div
            onClick={() => {
              submited();
            }}
            className="ui button"
            tabIndex="0"
          >
            Submit Order
          </div>
        </form>
      </div>
    );
  }
}

const btn = {
  backgroundColor: "white",
};

const ctn = { paddingBottom: "90px" ,
padding:"20px"};
