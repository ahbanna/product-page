import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { title, price, image, colors, size } = props.info;
  const renderSizes = size.map((s) => (
    <span key={s} className="size-label">
      {s}
    </span>
  ));
  return (
    <div className="single-product">
      <img src={image} alt="" />
      <div class=" product-variations">
        <a href="#" class="color" style={{ backgroundColor: "#ffcc01" }}></a>
        <a href="#" class="color" style={{ backgroundColor: "#ca6d00" }}></a>
        <a href="#" class="color" style={{ backgroundColor: "#1c93cb" }}></a>
        <a href="#" class="color" style={{ backgroundColor: "#ccc" }}></a>
        <a href="#" class="color" style={{ backgroundColor: "#333" }}></a>
      </div>
      <h4>{title}</h4>
      <p className="product-price">${price}</p>
      {/* <p>{size}</p> */}
      <div className="size-labels">{renderSizes}</div>
      <div className="details-btn">
        <button type="button">See Details</button>
      </div>
    </div>
  );
};

export default SingleProduct;
