import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const User = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - All-Users"}>
      <div className="container-fluid m-3 -3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1>Admin Name:{auth?.user?.name}</h1>
              <h3>Admin Email:{auth?.user?.email}</h3>
              <h3>All User{auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
