import React from "react";
import "./Card.css";
import { BiSolidBed, BiSolidBath } from "react-icons/bi";
// import house_1 from "../../assets/house_1.jpg";

const Card = (props) => {

  return (
    
    <div className="card">
      <img className="card__img" src={props.data.img} alt="" />
      <div className="card__text">
        <p className="house__type">{props.data.houseType}</p>
        <h3 className="house__address">{props.data.addressMain}</h3>
        <p className="full__address">{props.data.addressOther}</p>
        <div className="card__bottom">
          <div className="card__logos">
            <div>
              <BiSolidBed className="card__logos-icon" />
              <span>{props.data.bedroom}</span>
            </div>
            <div>
              <BiSolidBath className="card__logos-icon"  />
              <span>{props.data.bathroom}</span>
            </div>
          </div>
          <h3 className="card__price">
            ${props.data.price} <span>/m</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
