import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { signIn } from "next-auth/client";

async function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(result);

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="container bg-warning">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center bg-dark text-white shadow fw-bold">
                Login
              </div>
              <div className="card-body shadow border-0">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label> Enter Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
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
                  <Link href="/">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-block py-3"
                    />
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

export default Login;
