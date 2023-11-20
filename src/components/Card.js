import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = () => {};

  return (
    <div>
      <div className="card mt-3" style={{ width: "20rem", maxHeight: "360px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="Not getting"
          style={{ height: "130px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100 p-0" style={{ height: "38px" }}>
            <select
              className="m-2 h-80 w-2 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-80 w-2 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className=" d-inline ms-2 h-100 w-5 fs-5">Total price</div>
          </div>

          <hr></hr>

          <button
            className={`btn btn-success justify-center ms-2 `}
            onclick={handleAddToCart}
          >
            Add to Cart
          </button>

          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  );
}
