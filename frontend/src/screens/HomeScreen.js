import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import { listProducts } from "../actions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";

const ProductsRow = ({ loading, error, products }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

///////////////////// Home Screen Start ///////////////////////
const HomeScreen = ({ productList, listProducts }) => {
  const { loading, error, products } = productList;
  useEffect(() => {
    listProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <ProductsRow loading={loading} error={error} products={products} />
    </div>
  );
};
///////////////////// Home Screen End ////////////////////////

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};
const actions = {
  listProducts,
};

export default connect(mapStateToProps, actions)(HomeScreen);
