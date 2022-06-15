import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { connect } from "react-redux";

import { listProductDetails } from "../actions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";

const addToCartHandler = (navigate, id, qty) => {
  navigate(`/cart/${id}?qty=${qty}`);
};

const ProductRow = ({ loading, error, product, qty, setQty, navigate, id }) => {
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock ? (
                  <ListGroup.Item>
                    <Row>
                      <Col>qty:</Col>
                      <Col xs="auto">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[
                            ...Array(Math.min(product.countInStock, 10)).keys(),
                          ].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ) : (
                  ""
                )}

                <ListGroup.Item>
                  <Button
                    disabled={!product.countInStock}
                    className="btn-block"
                    onClick={(e) => addToCartHandler(navigate, id, qty)}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

///////////////////// Product Screen Start ///////////////////////
const ProductScreen = ({ productDetails, listProductDetails }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    listProductDetails(id);
  }, [id]);

  return (
    <div className="product">
      <Link to="/" className="btn btn-light my-3 go-back">
        Go Back
      </Link>
      <ProductRow
        loading={loading}
        error={error}
        product={product}
        qty={qty}
        setQty={setQty}
        navigate={navigate}
        id={id}
      />
    </div>
  );
};
///////////////////// Product Screen End /////////////////////////

const mapStateToProps = (state) => {
  return {
    productDetails: state.productDetails,
  };
};
const actions = {
  listProductDetails,
};

export default connect(mapStateToProps, actions)(ProductScreen);
