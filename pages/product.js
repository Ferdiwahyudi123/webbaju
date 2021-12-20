import React from "react";
import Layout from "../comps/Layout";
import NewProduk from "../comps/newproduk";

export default function newproduk() {
  return (
    <div>
      <Layout title="Product">
        <NewProduk />
      </Layout>
    </div>
  );
}
