import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
        <Card.Text as="div" className="my-3">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3" className="pro-price">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
