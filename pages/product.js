import Layout from "../comps/Layout";

const Product = () => {
  return (
    <Layout title="produk">
      <section className="bg-warning">
        <div className="container">
          <div className="text-center">
            <h1>Flicker Best T-shirt</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Scooter</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EEy45_6Ofl2fK66GDTnXp4iW7d_ogzZfkg&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.125.000
                  </p>
                  <p className="card-text text-muted">
                    bahan premium combed 30s lembut dan tidak bikin gerah/tidak
                    panas sablon digital lebih halus dan lembut.
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Smile</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsMLb2x4g2jlrj1lj1L-G_UQLNdK5IEMWWw&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.115.000
                  </p>
                  <p className="card-text text-muted">
                    bahan premium combed 30s lembut dan tidak bikin gerah sablon
                    digital lebih halus dan lembut dan tidak luntur bila di
                    cuci.
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Nasa</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-XzfG2Yt1Inyu4b5wpgMG_G0IV7hicxzRA&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.120.000
                  </p>
                  <p className="card-text text-muted">
                    Bahan tdk panas, lembut & nyaman dipakai 100% COTTON -- MAX
                    HANDSOME Sablon polyflex printing.
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Planet Mars</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7ba5ZDDbP3vUM_XDM2OzJGqbgWWlPuO1BQ&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.110.000
                  </p>
                  <p className="card-text text-muted">
                    Kaos Pria ini sangat cocok dipakai dengan celana pendek atau
                    celana jeans panjang sangat cakep dan rekomended.
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Minions</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzmjP3TG7AphpPoOih_jPteeFnopVPO1Rdg&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.100.000
                  </p>
                  <p className="card-text text-muted">
                    Jahitan Double Stick dan Rapih, Bahan Cotton Combed 30S
                    (Nyaman dan tidak panas).
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow ">
                <div className="card-body text-center ">
                  <h4 className="card-title">Solo Player</h4>
                  <p className="lead card-subtitle mb-2">T-shirt buy now</p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaBjw7zkjAIyHL
                    _HVOVH1CjijVHeRJ28ryGBmonZW0CUNQ3MnSB0NZYPkj-hdqCpH2w8&usqp=CAU"
                    className="img-fluid"
                  />
                  <p className="display-5 my-2 text-primary fw bold">
                    Rp.130.000
                  </p>
                  <p className="card-text text-muted">
                    Bahan tdk panas, lembut & nyaman dipakai 100% COTTON -- 100%
                    MAX HANDSOME Sablon polyflex printing.
                  </p>
                  <a className="btn btn-outline-primary mt-2">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
