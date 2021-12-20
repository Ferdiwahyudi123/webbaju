import React from "react";
import Link from "next/link";

export const produk = ({
  title,
  harga,
  keterangan,
  className,
  sellerclass,
  img,
  imgfluid,
  href,
  button,
  button2,
  subtitle,
}) => {
  return (
    <>
      <div className={className}>
        <div className={`card text-center shadow +${sellerclass}`}>
          <div className="card-body text-center ">
            <h4 className="card-title">{title}</h4>
            <p className="lead card-subtitle">{subtitle}</p>
            <img src={img} className={`img-fluid +${imgfluid}`} />
            <p className="display-6 my-2 text-primary fw bold">Rp.{harga}</p>
            <p className="card-text text-muted">{keterangan}</p>
            <a className="btn btn-outline-primary mt-2 card-link">{button2}</a>
            <Link href={`${href}`}>
              <a className="btn btn-outline-primary mt-2 card-link">{button}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default produk;
