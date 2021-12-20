import React from "react";

export const bajuhyper = ({
  title,
  harga,
  keterangan,
  className,
  sellerclass,
  img,
  imgfluid,
}) => {
  return (
    <>
      <div className={className}>
        <div className={`card text-center shadow +${sellerclass}`}>
          <div className="card-body text-center ">
            <h4 className="card-title">{title}</h4>
            <img src={img} className={`img-fluid +${imgfluid}`} />
            <p className="display-6 my-2 text-primary fw bold">Rp.{harga}</p>
            <p className="card-text text-muted">{keterangan}</p>
            <a className="btn btn-outline-primary mt-2">Buy Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default bajuhyper;
