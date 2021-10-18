import React from "react";
import "./styles.css";

const DetailsCard = ({ userDeatials }) => {

  return (
    <div className="card-container">
      {userDeatials?.map(({ id, email, gender, name }) => {
        return (
          <div className="card-inner-container" key={id}>
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
