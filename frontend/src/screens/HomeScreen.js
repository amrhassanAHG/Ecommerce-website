import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { listProducts } from "../actions";
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
        <h2>Loading ...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
  };
};
const actions = {
  listProducts,
};

export default connect(mapStateToProps, actions)(HomeScreen);
