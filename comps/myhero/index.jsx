import React from "react";
import Hero from "./hero";

export default function MyHero() {
  return (
    <>
      <section className="bg-warning">
        <div className="container">
          <div className="text-center">
            <h1>T-Shirt MyHero</h1>
            <p className="lead text-muted">
              MATERIAL :
              <br />- 100% KATUN QUALITY (COMBED 30s)
              <br />- JAHITAN RANTAI STANDAR DISTRO
              <br />- BAHAN NYAMAN - TIDAK PANAS
              <br />- MENYERAP KERINGAT
              <br />- AVAILABLE M - L - XL
            </p>
          </div>
          <div className="row">
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Loking"
              harga="125.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              img="https://id-live-05.slatic.net/p/1c817de1af95e8c0a7898ac70329390b.jpg_720x720q80.jpg_.webp"
              imgfluid="img-fluid"
            />
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Fododool"
              harga="125.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://id-live-05.slatic.net/p/8b2f0942385ccd5f4fd6374684d4a197.jpg_720x720q80.jpg_.webp"
              imgfluid="img-fluid"
            />
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Pandemic"
              harga="125.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON --
                      MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/87d2945914ceb17962dbedcf60368e78"
              imgfluid="img-fluid"
            />
          </div>
          <div className="row">
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Appocalypse"
              harga="125.000"
              keterangan="Kaos Pria ini sangat cocok dipakai dengan celana pendek atau
                    celana jeans panjang sangat cakep dan rekomended."
              img="https://cf.shopee.co.id/file/f7197cca7ba25d46b2ba65c44f8b745b"
              imgfluid="img-fluid"
            />
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Kupu-kupu malam"
              harga="125.000"
              keterangan="Jahitan Double Stick dan Rapih, Bahan Cotton Combed 30S
                    (Nyaman dan tidak panas)."
              img="https://id-test-11.slatic.net/p/4b4a0b25b22616295dc73000b53f6f90.jpg"
              imgfluid="img-fluid"
            />
            <Hero
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Insomnia"
              harga="125.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON -- 100%
                    MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/dfb272818215cea7c96201705d1fc2c2_tn"
              imgfluid="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
}
