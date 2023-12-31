import React from "react";
import image from "./images/photo.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center ">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-10 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  hi <strong>John</strong>
                </h1>
                <h2 className="my-3">We sell burgers</h2>
                <div className="mt-3">
                  <NavLink href="" className="btn-menu" to="/menu">
                    Menu
                  </NavLink>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={image} className="img-fluid animated " alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
