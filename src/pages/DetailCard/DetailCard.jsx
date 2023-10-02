import React from "react";
import "./DetailCard.css";
import { AiTwotoneHeart, AiFillCar, AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidBed, BiSolidBath, BiShapeSquare } from "react-icons/bi";
import Nav from "../../components/Nav/Nav";
import { Link, useLocation } from "react-router-dom";

const DetailCard = () => {
  let { state } = useLocation();
  return (
    <div>
      <div className="detail__image">
        <img src={state.house.img} alt="" cla />
        <div className="detail__image_small">
          <img src={state.house.img} alt="" />
          <img src={state.house.img} alt="" />
        </div>
        <Link to="/">
          <div className="back__arrow">
            <AiOutlineArrowLeft />
          </div>
        </Link>
      </div>

      <div className="detail__text">
        <div className="detail__text-upper">
          <p>{state.house.houseType}</p>
          <AiTwotoneHeart className="heart__icon" />
        </div>
        <div className="detail__address">
          <h3>{state.house.addressMain}</h3>
          <p>{state.house.addressOther}</p>
        </div>
        <div className="detail__facilities">
          <div className="detail__facility">
            <BiSolidBed className="detail__facilities-icon" />
            <span>{state.house.bedroom} Bedrooms</span>
          </div>
          <div className="detail__facility">
            <BiSolidBath className="detail__facilities-icon" />
            <span>{state.house.bathroom} Bathrooms</span>
          </div>
          <div className="detail__facility">
            <BiShapeSquare className="detail__facilities-icon" />
            <span>{state.house.area} SQFT</span>
          </div>
          <div className="detail__facility">
            <AiFillCar className="detail__facilities-icon" />
            <span>{state.house.garage} garages</span>
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default DetailCard;
