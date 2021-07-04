import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="container">
      <img src={data.img} alt={data.name} className="container_img" />
      <div className="data">
        <h2 className="data_name">{data.name}</h2>
        <h3>
          NickName:<span>{data.nickname}</span>
        </h3>
        <h3>
          Birthday:<span>{data.birthday}</span>
        </h3>
        <h3>
          status:<span>{data.status}</span>
        </h3>
        <h3>
          Portrayed:<span className="occupation">{data.portrayed}</span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
