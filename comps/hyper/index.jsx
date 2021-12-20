import React from "react";
import BajuHyper from "./bajuhyper";

export default function Hyper() {
  return (
    <>
      <section className="bg-warning">
        <div className="container">
          <div className="text-center">
            <h1>T-Shirt Hyper</h1>
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
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Roman"
              harga="120.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              img="https://id-test-11.slatic.net/p/9762b575ce76f0264c22b7584a382469.jpg"
              imgfluid="img-fluid"
            />
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="SevenKey"
              harga="120.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://cf.shopee.co.id/file/af88140cd84ec08bf8ecdee795be0208"
              imgfluid="img-fluid"
            />
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Child Statue"
              harga="120.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON --
                      MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/baf8896b306f995d6d8978c8d1c91a82"
              imgfluid="img-fluid"
            />
          </div>
          <div className="row">
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Error Human"
              harga="120.000"
              keterangan="Kaos Pria ini sangat cocok dipakai dengan celana pendek atau
                    celana jeans panjang sangat cakep dan rekomended."
              img="https://berkahclothing.com/wp-content/uploads/2021/10/5985e5d44b1484a974e5e9d976bd1d48-300x300.jpg"
              imgfluid="img-fluid"
            />
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Miscief Ordinary"
              harga="120.000"
              keterangan="Jahitan Double Stick dan Rapih, Bahan Cotton Combed 30S
                    (Nyaman dan tidak panas)."
              img="https://cf.shopee.co.id/file/4ca9d600c4584495277c3951dc6b6f3d"
              imgfluid="img-fluid"
            />
            <BajuHyper
              className="col-md-4 "
              sellerclass="card text-center shadow "
              title="Way Of Freedom"
              harga="120.000"
              keterangan="Bahan tdk panas, lembut & nyaman dipakai 100% COTTON -- 100%
                    MAX HANDSOME Sablon polyflex printing."
              img="https://cf.shopee.co.id/file/82a52a32f5d0257dd4c3b560b3093893"
              imgfluid="img-fluid"
            />
          </div>
        </div>
      </section>
    </>
  );
}
