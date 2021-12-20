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
              href="/tshirthero"
              button="View"
            />
            <Subprice
              className="col-md-4"
              sellerclass="card text-center "
              title="limited Edition"
              harga="200.000"
              keterangan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subtitle="T-shirt buy now"
              href="/tshirtlimited"
              button="View"
            />
            <Subprice
              className="col-md-4"
              sellerclass=" card text-center"
              title="Hyper"
              harga="120.000"
              keterangan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              subtitle="T-shirt buy now"
              href="/tshirthyper"
              button="View"
            />
          </div>
        </div>
      </section>
    </>
  );
}
