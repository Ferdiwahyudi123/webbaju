import React from "react";
import Link from "next/link";
export const subprice = ({
  title,
  subtitle,
  harga,
  keterangan,
  className,
  sellerclass,
  href,
  button,
}) => {
  return (
    <>
      <div className={className}>
        <div
          className={`card text-center bg-dark text-white shadow +${sellerclass}`}
        >
          <div className="card-body text-center ">
            <h4 className="card-title">{title}</h4>
            <p className="lead card-subtitle">{subtitle}</p>
            <p className="display-6 my-4 text-primary fw bold">Rp. {harga}</p>
            <p className="card-text ">{keterangan}</p>
            <Link href={`${href}`}>
              <a className="btn btn-outline-primary btn-lg mt-3">{button}</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default subprice;
