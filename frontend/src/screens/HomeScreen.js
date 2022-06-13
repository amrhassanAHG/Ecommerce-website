import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { listProducts, listProductDetails } from "../actions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";

const HomeScreen = ({ productList, listProducts }) => {
  const { error, loading, products } = productList;
  useEffect(() => {
    listProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    productDetails: state.productDetails,
  };
};
const actions = {
  listProducts,
  listProductDetails,
};

export default connect(mapStateToProps, actions)(HomeScreen);
