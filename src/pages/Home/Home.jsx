import React from "react";
import "./Home.css";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <>
    <div className="main__container">
      <Header />
      <SearchBar />
      <Categories />
      <Nav />
      <Hero />
    </div>
    </>
  );
};

export default Home;
