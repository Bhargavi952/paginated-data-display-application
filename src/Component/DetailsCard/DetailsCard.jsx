import React from "react";
import styles from "./styles.module.css";

const DetailsCard = ({ userDeatials }) => {
  //   console.log(userDeatials);
  return (
    <div className={styles.card}>
      {userDeatials?.map(({ id, email, gender, name }) => {
        return (
          <div className={styles.cardcontainer} key={id}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{gender}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsCard;
