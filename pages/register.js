import Layout from "../comps/Layout";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signUp() {
    let item = { name, email, password };
    let result = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result", result);

    await router.push("/login");
  }

  return (
    <>
      <Layout title="register">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal text-center">Please register</h1>
            <div className="form-floating">
              <input
                onChange={(e) => setName(e.target.value)}
                type="name"
                value={name}
                className="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                className="form-control"
                id="floatingInput"
                placeholder="Email Address"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick={signUp}>
              Sign Up
            </button>
          </form>
        </main>
      </Layout>
    </>
  );
};
export default Register;
