import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 -3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>ALl Orders</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
