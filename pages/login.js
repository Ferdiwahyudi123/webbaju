import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../comps/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDafault();

    await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    await router.push("/");
  };

  return (
    <>
      <Layout title="login">
        <main className="form-login">
          <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
            <div className="form-floating">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Enter Email"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </main>
      </Layout>
    </>
  );
};

export default Login;
