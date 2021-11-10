import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
