import "./Products.css";
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Container } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <Container>
        <div className="all-products">
          {products.map((product) => (
            <SingleProduct key={product.id} info={product}></SingleProduct>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
