import React from "react";
import Subprice from "./subprice";
export default function SectionPrice() {
  return (
    <>
      <section className="bg-warning mt-5">
        <div className="container">
          <div className="text-center">
            <h1>Top Edition T-shirt</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row ">
            <Subprice
              className="col-md-4 "
              sellerclass="card text-center "
              title="My Hero"
              harga="125.000"
              keterangan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subtitle="T-shirt buy now"
            />
            <Subprice
              className="col-md-4"
              sellerclass="card text-center "
              title="limited Edition"
              harga="200.000"
              keterangan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subtitle="T-shirt buy now"
            />
            <Subprice
              className="col-md-4"
              sellerclass=" card text-center"
              title="Hyper"
              harga="120.000"
              keterangan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subtitle="T-shirt buy now"
            />

            {/* <div className="col-8 col-lg-4 col-xl-3">
              <div className="card border-0 text-white bg-dark shadow">
                <div className="card-body text-center py-4">
                  <h4 className="card-title">My Hero</h4>
                  <p className="lead card-subtitle">T-shirt buy now</p>
                  <p className="display-5 my-4 text-primary fw bold">
                    Rp.125.000
                  </p>
                  <p className="card-text mx-5 text-white d-none d-lg-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a className="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-9 col-lg-4 ">
              <div className="card border-primary boorder-2 text-white bg-dark shadow">
                <div className="card-header text-center text-primary">
                  Best Seller
                </div>
                <div className="card-body text-center py-4">
                  <h4 className="card-title">Unlimited Edition</h4>
                  <p className="lead card-subtitle">T-shirt buy now</p>
                  <p className="display-5 my-4 text-primary fw bold">
                    Rp.150.000
                  </p>
                  <p className="card-text mx-5 text-white d-none d-lg-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a className="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-8 col-lg-4 col-xl-3">
              <div className="card border-0 text-white bg-dark shadow">
                <div className="card-body text-center py-4">
                  <h4 className="card-title">Beast</h4>
                  <p className="lead card-subtitle">T-shirt buy now</p>
                  <p className="display-5 my-4 text-primary fw bold">
                    Rp.120.000
                  </p>
                  <p className="card-text mx-5 text-white d-none d-lg-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a className="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
