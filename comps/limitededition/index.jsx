import React from "react";
import Limited from "./limited";

export default function LimitedEdition() {
  return (
    <>
      <section className="bg-warning">
        <div className="container">
          <div className="text-center">
            <h1>T-Shirt Distro</h1>
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
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Depression"
              harga="200.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              img="https://cf.shopee.co.id/file/00900d5921daf5633640e46cc10a9e78"
              imgfluid="img-fluid"
            />
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Dangerous"
              harga="200.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://cf.shopee.co.id/file/b008355c03e6089a9995f117d99a196f"
              imgfluid="img-fluid"
            />
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Precision"
              harga="200.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON --
                      MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/b33c1aea511642fc3d80bfa3f76e4cf2"
              imgfluid="img-fluid"
            />
          </div>
          <div className="row">
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Queen Beauty"
              harga="200.000"
              keterangan="Kaos Pria ini sangat cocok dipakai dengan celana pendek atau
                    celana jeans panjang sangat cakep dan rekomended."
              img="https://cf.shopee.co.id/file/52b9b81b43dfbd55ca212ec990ad3625"
              imgfluid="img-fluid"
            />
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Fck Society"
              harga="200.000"
              keterangan="Jahitan Double Stick dan Rapih, Bahan Cotton Combed 30S
                    (Nyaman dan tidak panas)."
              img="https://id-live-01.slatic.net/p/4bf19e130366b3ec0b1ea0dd8d1e1051.jpg"
              imgfluid="img-fluid"
            />
            <Limited
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Hannya Kyogen"
              harga="200.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON -- 100%
                    MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/d37067caa530377e493ac3c79f90728c"
              imgfluid="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
}
