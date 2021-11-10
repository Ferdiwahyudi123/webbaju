import React from "react";
import Layout from "../comps/Layout";
import Link from "next/link";

function register() {
  return (
    <>
      <Layout title="register">
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header text-center bg-dark text-white shadow fw-bold">
                  Register
                </div>
                <div className="card-body shadow border-0">
                  <form>
                    <div className="form-group">
                      <label> Enter Name</label>
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Enter Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Enter Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password Address"
                        name="password"
                        required
                      />
                    </div>
                    <hr />
                    <Link href="#">
                      <button onClick={register} className="btn btn-primary">
                        Sign Up
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default register;
