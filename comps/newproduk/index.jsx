import React from "react";
import Produk from "./produk";

export default function NewProduk() {
  return (
    <>
      <section className="bg-warning">
        <div className="container">
          <div className="text-center">
            <h1>The Best T-Shirt</h1>
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
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt My Hero"
              title="Loking"
              harga="125.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              subtitle="T-shirt My Hero"
              img="https://id-live-05.slatic.net/p/1c817de1af95e8c0a7898ac70329390b.jpg_720x720q80.jpg_.webp"
              imgfluid="img-fluid"
              href="/tshirthero"
              button2="Buy Now"
              button="View"
            />
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt Limited Edition"
              title="Depression"
              harga="200.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              img="https://cf.shopee.co.id/file/00900d5921daf5633640e46cc10a9e78"
              imgfluid="img-fluid"
              href="/tshirtlimited"
              button2="Buy Now"
              button="View"
            />
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt Hyper"
              title="Roman"
              harga="120.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin
                      gerah/tidak panas sablon digital lebih halus dan lembut."
              img="https://id-test-11.slatic.net/p/9762b575ce76f0264c22b7584a382469.jpg"
              imgfluid="img-fluid"
              href="/tshirthyper"
              button2="Buy Now"
              button="View"
            />
          </div>
          <div className="row">
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt My Hero"
              title="Fododool"
              harga="125.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://id-live-05.slatic.net/p/8b2f0942385ccd5f4fd6374684d4a197.jpg_720x720q80.jpg_.webp"
              imgfluid="img-fluid"
              href="/tshirthero"
              button2="Buy Now"
              button="View"
            />
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt Limited Edition"
              title="Dangerous"
              harga="200.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://cf.shopee.co.id/file/b008355c03e6089a9995f117d99a196f"
              imgfluid="img-fluid"
              href="/tshirtlimited"
              button2="Buy Now"
              button="View"
            />
            <Produk
              className="col-md-4 "
              sellerclass="card text-center shadow "
              subtitle="T-shirt Hyper"
              title="SevenKey"
              harga="120.000"
              keterangan="bahan premium combed 30s lembut dan tidak bikin gerah
                      sablon digital lebih halus dan lembut dan tidak luntur
                      bila di cuci."
              img="https://cf.shopee.co.id/file/af88140cd84ec08bf8ecdee795be0208"
              imgfluid="img-fluid"
              href="/tshirthyper"
              button2="Buy Now"
              button="View"
            />
          </div>
        </div>
      </section>
    </>
  );
}
