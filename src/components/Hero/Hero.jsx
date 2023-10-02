import React from "react";
import "./Hero.css";
import "swiper/css";
import Card from "../NearbyCard/Card";
import { houseData } from "../../utils/data/houseData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero__div">
      <hr />
      <h1>Nearby</h1>
      <div>
        {houseData.map((house, id) => (
          <Link to={"detail/" + house.id} state={{house}} key={id}>
            <Card data={house} key={id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
