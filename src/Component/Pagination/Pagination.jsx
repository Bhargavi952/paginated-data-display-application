import React from "react";
import "./styles.css";

const Pagination = ({ userDetailsPerPage, totaluserDetails, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaluserDetails / userDetailsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page-item">
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => paginate(number)} className="page-btn">
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
