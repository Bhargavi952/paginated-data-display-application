import React from "react";
import styles from "./styles.module.css";


const Pagination = ({ userDetailsPerPage, totaluserDetails, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totaluserDetails / userDetailsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pageitem}>
      {pageNumbers.map((number) => (
        <>
          <div key={number}>
            <button onClick={() => paginate(number)} className={styles.pagebtn}>
              {number}
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Pagination;
