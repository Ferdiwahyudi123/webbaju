import React from "react";

export default function SectionHero() {
  return (
    <>
      <section id="intro">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-2">Flicker's</div>
                <div className="display-5 text-muted">
                  Flicker's The best Distro
                </div>
              </h1>
              <p className="lead my-4 text-muted">
                lorem ipsun, dolor sit amet consectectur adipisicing elit.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                className="img-fluid shadow"
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MnwxMjA3f
                  DB8MHxzZWFyY2h8MXx8dwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
