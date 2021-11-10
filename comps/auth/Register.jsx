import React, { useState } from "react";
import Link from "next/link";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {}

  return (
    <>
      <div className="container bg-warning">
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Enter Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
}

export default Register;
